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

export type AuthTokens = {
  accessToken?: string;
  refreshToken?: string;
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

  // const { initData } = useTelegram();
  const initData = false;

  const { data, isLoading, error } = useQuery<AuthTokens>({
    queryKey: ["telegram-login"],
    enabled: Boolean(initData),
    queryFn: async () => {
      const res = await axios.post<AuthTokens>(
        "https://taxivoshod.ru/api/lot/login.php",
        {
          initData,
        },
      );
      // .catch((e) => console.error(e));
      return res.data;
    },
    retry: false,
    staleTime: Infinity,
  });

  const setTokens = (tokens: AuthTokens | null) => {
    setTokensState(tokens);
  };

  const logout = () => {
    setTokensState(null);
  };

  useEffect(() => {
    if (data) {
      setTokens(data);
    }
  }, [data]);

  const value = useMemo<AuthContextValue>(() => {
    return {
      isAuthenticated: Boolean(tokens?.accessToken),
      tokens,
      isLoading,
      error,
      setTokens,
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
