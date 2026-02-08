"use client";

import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";
import { refreshAccessToken } from "./refreshToken";

let isRefreshing = false;

type QueueItem = {
  resolve: (token: string) => void;
  reject: (err: any) => void;
};

let queue: QueueItem[] = [];

/**
 * Экземпляр Axios с базовым URL и таймаутом.
 */
const apiClient: AxiosInstance = axios.create({
  baseURL: "https://lot.voshodcrm.ru/api/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

let accessToken: string | null = null;
let refreshToken: string | null = null;

export const setApiAccessToken = (token: string | null) => {
  accessToken = token;
};

// ========================
// REQUEST INTERCEPTOR
// ========================
apiClient.interceptors.request.use((config) => {
  if (accessToken) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

// ========================
// RESPONSE INTERCEPTOR (REFRESH FLOW)
// ========================
apiClient.interceptors.response.use(
  (res) => res,

  async (error) => {
    const originalRequest = error.config;

    if (!originalRequest || error.response?.status !== 401) {
      return Promise.reject(error);
    }

    // Если refresh уже идёт — ставим запрос в очередь
    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        queue.push({
          resolve: (token) => {
            originalRequest.headers = originalRequest.headers ?? {};
            originalRequest.headers.Authorization = `Bearer ${token}`;
            resolve(apiClient(originalRequest));
          },
          reject,
        });
      });
    }

    isRefreshing = true;

    try {
      refreshToken = localStorage.getItem("refreshToken");

      if (!refreshToken) {
        throw new Error("No refresh token");
      }

      const newTokens = await refreshAccessToken(refreshToken);

      // сохраняем новые токены
      setApiAccessToken(newTokens.access);
      localStorage.setItem("refreshToken", newTokens.refresh);

      // повторяем очередь
      queue.forEach(({ resolve }) => resolve(newTokens.access));
      queue = [];

      // повторяем оригинальный запрос
      originalRequest.headers = originalRequest.headers ?? {};
      originalRequest.headers.Authorization = `Bearer ${newTokens.access}`;

      return apiClient(originalRequest);
    } catch (err) {
      // отклоняем очередь
      queue.forEach(({ reject }) => reject(err));
      queue = [];

      // чистим сессию
      localStorage.removeItem("refreshToken");
      setApiAccessToken(null);

      // вызываем logout глобально
      window.dispatchEvent(new Event("logout"));

      return Promise.reject(err);
    } finally {
      isRefreshing = false;
    }
  },
);

/**
 * Утилита для работы с API через Axios.
 *
 * Оборачивает стандартные методы Axios (`get`, `post`, `put`, `delete`) и возвращает только `data` ответа.
 *
 * @example
 * ```ts
 * const users = await API.get<User[]>('/users');
 * await API.post('/users', { name: 'Vladimir' });
 * ```
 */
const API = {
  /**
   * Выполняет GET-запрос к API.
   *
   * @template T - тип ожидаемых данных в ответе
   * @param url - URL запроса
   * @param config - дополнительная конфигурация Axios
   * @returns Промис с данными типа T
   */
  get: <T>(url: string, config?: AxiosRequestConfig): Promise<T> =>
    apiClient.get<T>(url, config).then((res) => res.data),
  /**
   * Выполняет POST-запрос к API.
   *
   * @template T - тип ожидаемых данных в ответе
   * @param url - URL запроса
   * @param data - тело запроса
   * @param config - дополнительная конфигурация Axios
   * @returns Промис с данными типа T
   */
  post: <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> =>
    apiClient.post<T>(url, data, config).then((res) => res.data),
  /**
   * Выполняет PUT-запрос к API.
   *
   * @template T - тип ожидаемых данных в ответе
   * @param url - URL запроса
   * @param data - тело запроса
   * @param config - дополнительная конфигурация Axios
   * @returns Промис с данными типа T
   */
  put: <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> =>
    apiClient.put<T>(url, data, config).then((res) => res.data),
  /**
   * Выполняет DELETE-запрос к API.
   *
   * @template T - тип ожидаемых данных в ответе
   * @param url - URL запроса
   * @param config - дополнительная конфигурация Axios
   * @returns Промис с данными типа T
   */
  delete: <T>(url: string, config?: AxiosRequestConfig): Promise<T> =>
    apiClient.delete<T>(url, config).then((res) => res.data),
};

export default API;
