import { useEffect, useState } from "react";
import { retrieveLaunchParams } from "@tma.js/sdk";

export interface TelegramUser {
  id: number;
  first_name?: string;
  last_name?: string;
  username?: string;
  language_code?: string;
}

export interface TelegramWebApp {
  user?: TelegramUser;
  initData?: string;
  initDataUnsafe?: {
    user?: TelegramUser;
    auth_date?: number;
  };
}

export const useTelegram = () => {
  const [tg, setTg] = useState<TelegramWebApp | null>(null);

  useEffect(() => {
    // Проверяем, что объект WebApp есть
    if (!window.Telegram?.WebApp) return;

    const webApp = window.Telegram.WebApp;

    // Уведомляем Telegram, что приложение готово
    webApp.ready();

    try {
      // Получаем параметры запуска через @tma.js/sdk
      const launchParams = retrieveLaunchParams();

      setTg({
        user: launchParams.user as TelegramUser | undefined,
        initData: launchParams.initData as string | undefined,
        initDataUnsafe: launchParams.initDataUnsafe as { user?: TelegramUser; auth_date?: number } | undefined,
      });
    } catch (err) {
      // fallback на стандартный WebApp объект, если что-то пошло не так
      console.warn("Failed to retrieve launch params:", err);

      setTg({
        user: webApp.initDataUnsafe?.user,
        initData: webApp.initData,
        initDataUnsafe: webApp.initDataUnsafe,
      });
    }
  }, []);

  return tg;
};
