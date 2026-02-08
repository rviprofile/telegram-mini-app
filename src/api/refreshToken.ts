import axios from "axios";
import { setApiAccessToken } from ".";

export type RefreshResponse = {
  access: string;
  refresh: string;
};

export const refreshAccessToken = async (refreshToken: string) => {
  const res = await axios.post<RefreshResponse>(
    "https://lot.voshodcrm.ru/api/login/refresh",
    { refresh: refreshToken },
  );

  setApiAccessToken(res.data.access);

  return res.data;
};
