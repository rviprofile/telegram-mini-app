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

  setTokens: (tokens: AuthTokens | null) => void;
  logout: () => void;
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
        "https://taxivoshod.ru/api/login/init",
        {
          initData,
          startParam: tg.tgWebAppStartParam,
        },
      );
      // .catch((e) => console.error(e));
      return res.data;
    },
    retry: false,
    staleTime: Infinity,
  });

  useEffect(() => {
    if (data?.access) {
      setTokensState(data);
      setApiAccessToken(data.access);
    }
  }, [data]);

  useEffect(() => {
    if (!data?.access) return;

    setTokensState(data);
    setApiAccessToken(data.access);

    if (data.refresh) {
      localStorage.setItem("refreshToken", data.refresh);
    }
  }, [data]);

  useEffect(() => {
    const logoutHandler = () => logout();

    window.addEventListener("logout", logoutHandler);

    return () => {
      window.removeEventListener("logout", logoutHandler);
    };
  }, []);

  const logout = () => {
    setTokensState(null);
    setApiAccessToken(null);
    localStorage.removeItem("refreshToken");
  };

  const value = useMemo<AuthContextValue>(() => {
    return {
      isAuthenticated: Boolean(tokens?.access),
      tokens,
      isLoading,
      error,
      setTokens: setTokensState,
      logout,
    };
  }, [tokens, isLoading, error]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);

  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return ctx;
};
