import { HStack, VStack } from "@chakra-ui/react";
import { NavMenu } from "../components/NavMenu/NavMenu";
import { Capsule } from "../components/Capsule/Capsule";
import { PrizePreviewCard } from "../components/PrizePreviewCard/PrizePreviewCard";
import { CounterCard } from "../components/CounterCard/CounterCard";
import { ActionTicketsCard } from "../components/ActionTicketsCard/ActionTicketsCard";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import type { LotteryProgress } from "../api/types";
import API from "../api";

export const Home = () => {
  const { data: progress } = useQuery({
    queryKey: ["progress"],
    queryFn: async (): Promise<LotteryProgress> => {
      return await API.get("/progress");
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
      <Capsule text={getStatus().text} color={getStatus().color} />
      <h1>Розыгрыш автомобиля</h1>
      <PrizePreviewCard />
      <CounterCard />
      <ActionTicketsCard />

      <HStack>
        <Link className={"default"} to={"/rules"}>
          Как определяется победитель
        </Link>
        <Link className={"default"} to={"/rules"}>
          Правила
        </Link>
      </HStack>

      <NavMenu />
    </VStack>
  );
};
