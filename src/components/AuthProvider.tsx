import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useTelegram } from "../hooks/useTelegram";
import { setApiAccessToken } from "../api";

export type AuthTokens = {
  access?: string;
  refresh?: string;
  ttl: number;
};

export type AuthContextValue = {
  isAuthenticated: boolean;
  tokens: AuthTokens | null;
  isLoading: boolean;
  error: unknown;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [tokens, setTokensState] = useState<AuthTokens | null>(null);
  const { initData, tg } = useTelegram();

  const { data, isLoading, error } = useQuery<AuthTokens>({
    queryKey: ["telegram-login"],
    enabled: Boolean(initData),
    queryFn: async () => {
      const res = await axios.post<AuthTokens>(
        "https://lot.voshodcrm.ru/api/login/init",
        {
          initData,
          startParam: tg.tgWebAppStartParam,
        },
      );

      return res.data;
    },
    retry: false,
    staleTime: Infinity,
  });

  useEffect(() => {
    if (!data?.access) return;

    setTokensState(data);
    setApiAccessToken(data.access);

    if (data.refresh) {
      try {
        localStorage.setItem("refreshToken", data.refresh);
      } catch {}
    }
  }, [data]);

  const value = useMemo<AuthContextValue>(() => {
    return {
      isAuthenticated: Boolean(tokens?.access),
      tokens,
      isLoading,
      error,
    };
  }, [tokens, isLoading, error]);

  return (
    <AuthContext.Provider value={value}>
      {/* ✅ Не рендерим детей пока идёт загрузка или токен ещё не установлен */}
      {isLoading || (Boolean(initData) && !tokens) ? null : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);

  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return ctx;
};
