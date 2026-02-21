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
  async (response) => {
    // Проверяем кастомную ошибку API
    if (
      response.data?.error === "Не указан токен авторизации" ||
      response.data?.error === "Невалидный токен авторизации"
    ) {
      const originalRequest = response.config;

      // защита от бесконечного retry
      if ((originalRequest as any)._retry) {
        return Promise.reject(response);
      }

      (originalRequest as any)._retry = true;

      // если refresh уже идёт — ставим запрос в очередь
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
        let refreshToken: string | null = null;

        try {
          refreshToken = localStorage.getItem("refreshToken");
        } catch {}

        if (!refreshToken) {
          throw new Error("No refresh token");
        }

        const newTokens = await refreshAccessToken(refreshToken);

        if (!newTokens?.access) {
          throw new Error("Refresh failed");
        }

        // сохраняем новые токены
        setApiAccessToken(newTokens.access);

        try {
          localStorage.setItem("refreshToken", newTokens.refresh);
        } catch {}

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
        try {
          localStorage.removeItem("refreshToken");
        } catch {}

        setApiAccessToken(null);

        window.dispatchEvent(new Event("logout"));

        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    // если ошибки нет — просто возвращаем ответ
    return response;
  },

  // fallback на реальные network ошибки
  (error) => Promise.reject(error),
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
