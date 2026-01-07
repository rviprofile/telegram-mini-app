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
  const [tg, setTg] = useState<any | null>(null);

  useEffect(() => {
    const launchParams = retrieveLaunchParams();
    setTg(launchParams);
  }, []);

  return tg;
};
