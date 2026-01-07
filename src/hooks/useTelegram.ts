import { useEffect, useState } from "react";

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
    if (!window.Telegram?.WebApp) return;

    const webApp = window.Telegram.WebApp;

    webApp.ready(); 

    setTg({
      user: webApp.initDataUnsafe?.user,
      initData: webApp.initData,
      initDataUnsafe: webApp.initDataUnsafe,
    });
  }, []);

  return tg;
};
