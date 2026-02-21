import { HStack, Skeleton, VStack } from "@chakra-ui/react";
import { NavMenu } from "../components/NavMenu/NavMenu";
import { Capsule } from "../components/Capsule/Capsule";
import { PrizePreviewCard } from "../components/PrizePreviewCard/PrizePreviewCard";
import { CounterCard } from "../components/CounterCard/CounterCard";
import { ActionTicketsCard } from "../components/ActionTicketsCard/ActionTicketsCard";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import type { LotteryProgress, User } from "../api/types";
import API from "../api";

export const Home = () => {
  const { data: progress, isLoading } = useQuery({
    queryKey: ["progress"],
    queryFn: async (): Promise<LotteryProgress> => {
      return await API.get("/progress");
    },
  });
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: async (): Promise<User> => {
      return await API.get("/user");
    },
  });
  const getStatus = () => {
    switch (progress?.status) {
      case "in_progress":
        return {
          color: "#bdf35d",
          text: "Активен",
        };
      case "await":
        return {
          color: "#f3ee5d",
          text: " Ожидает запуска",
        };
      case "result_await":
        return {
          color: "#5df3b0",
          text: "Подсчёт результатов",
        };
      case "finished":
        return {
          color: "#f37b5d",
          text: "Завершен",
        };
      default:
        return {
          color: "#925df3",
          text: "Неизвестен",
        };
    }
  };
  return (
    <VStack minH={"calc(100dvh - 60px)"} w={"100%"} padding={"20px"}>
      {isLoading ? (
        <Skeleton h={"25px"} w={"90px"} borderRadius={"16px"} opacity={"0.3"} />
      ) : (
        <Capsule text={getStatus().text} color={getStatus().color} />
      )}
      <h1>Розыгрыш автомобиля</h1>
      <PrizePreviewCard />
      <CounterCard />
      <ActionTicketsCard user={user} />

      <HStack>
        <Link className={"default"} to={"/docs"}>
          Как определяется победитель
        </Link>
        <Link className={"default"} to={"/docs"}>
          Правила
        </Link>
      </HStack>

      <NavMenu />
    </VStack>
  );
};
