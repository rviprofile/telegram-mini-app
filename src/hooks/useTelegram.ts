import { useEffect, useState } from "react";
import { retrieveLaunchParams, retrieveRawInitData } from "@tma.js/sdk";

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
  const [initData, setInitData] = useState<any | null>(null);
  const [startParam, setStartParam] = useState<any | null>(null);

  useEffect(() => {
    const launchParams = retrieveLaunchParams();
    const initDataRaw = retrieveRawInitData();
    console.log(tg);
    setTg(launchParams);
    setInitData(initDataRaw);
    setStartParam(launchParams.tgWebAppStartParam ?? launchParams.start_param);
  }, []);

  return { tg, initData, startParam };
};
