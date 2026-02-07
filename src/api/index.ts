"use client";

import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";
/**
 * Экземпляр Axios с базовым URL и таймаутом.
 *
 * @see {@link https://axios-http.com/ru/docs/instance | Экземпляр Axios}
 */
const apiClient: AxiosInstance = axios.create({
  baseURL: "https://lot.voshodcrm.ru/api/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

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
