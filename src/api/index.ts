// api/index.ts
"use client";

import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";
import { refreshAccessToken } from "./refreshToken";

let isRefreshing = false;
// ✅ Промис инициализации — refresh ждёт его завершения
let initPromise: Promise<void> | null = null;
let resolveInit: (() => void) | null = null;

type QueueItem = {
  resolve: (token: string) => void;
  reject: (err: any) => void;
};

let queue: QueueItem[] = [];

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

  // ✅ Когда токен установлен из init — сигнализируем что инициализация завершена
  if (token && resolveInit) {
    resolveInit();
    resolveInit = null;
    initPromise = null;
  }
};

/**
 * Вызывать до начала рендера компонентов (в AuthProvider до запроса init).
 * Сообщает API-клиенту: "жди, init ещё не завершён".
 */
export const beginAuthInit = () => {
  if (!initPromise) {
    initPromise = new Promise<void>((resolve) => {
      resolveInit = resolve;
    });
  }
};

/**
 * Вызывать если init завершился ошибкой — чтобы не висеть вечно.
 */
export const failAuthInit = () => {
  if (resolveInit) {
    resolveInit();
    resolveInit = null;
    initPromise = null;
  }
};

// REQUEST INTERCEPTOR
apiClient.interceptors.request.use((config) => {
  if (accessToken) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

// RESPONSE INTERCEPTOR
apiClient.interceptors.response.use(
  async (response) => {
    if (
      response.data?.error === "Не указан токен авторизации" ||
      response.data?.error === "Невалидный токен авторизации"
    ) {
      const originalRequest = response.config;

      if ((originalRequest as any)._retry) {
        return Promise.reject(response);
      }

      (originalRequest as any)._retry = true;

      // ✅ Если init ещё не завершён — ждём его, а не лезем в refresh
      if (initPromise) {
        await initPromise;

        // После init токен должен быть установлен — повторяем запрос
        if (accessToken) {
          originalRequest.headers = originalRequest.headers ?? {};
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          return apiClient(originalRequest);
        }

        return Promise.reject(response);
      }

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

        if (!refreshToken) throw new Error("No refresh token");

        const newTokens = await refreshAccessToken(refreshToken);

        if (!newTokens?.access) throw new Error("Refresh failed");

        setApiAccessToken(newTokens.access);

        try {
          localStorage.setItem("refreshToken", newTokens.refresh);
        } catch {}

        queue.forEach(({ resolve }) => resolve(newTokens.access));
        queue = [];

        originalRequest.headers = originalRequest.headers ?? {};
        originalRequest.headers.Authorization = `Bearer ${newTokens.access}`;

        return apiClient(originalRequest);
      } catch (err) {
        queue.forEach(({ reject }) => reject(err));
        queue = [];

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

    return response;
  },
  (error) => Promise.reject(error),
);

const API = {
  get: <T>(url: string, config?: AxiosRequestConfig): Promise<T> =>
    apiClient.get<T>(url, config).then((res) => res.data),
  post: <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> =>
    apiClient.post<T>(url, data, config).then((res) => res.data),
  put: <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> =>
    apiClient.put<T>(url, data, config).then((res) => res.data),
  delete: <T>(url: string, config?: AxiosRequestConfig): Promise<T> =>
    apiClient.delete<T>(url, config).then((res) => res.data),
};

export default API;