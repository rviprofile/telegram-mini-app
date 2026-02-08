import { HStack, Skeleton, Slider, Text } from "@chakra-ui/react";
import { Capsule } from "../Capsule/Capsule";
import * as S from "./HeaderCounterCard.styles";
import { useQuery } from "@tanstack/react-query";
import type { LotteryProgress } from "../../api/types";
import API from "../../api";

export const HeaderCounterCard = () => {
  const { data: progress, isLoading } = useQuery({
    queryKey: ["progress"],
    queryFn: async (): Promise<LotteryProgress> => {
      return await API.get("/progress");
    },
  });
  if (isLoading) {
    return (
      <Skeleton
        width={"100%"}
        height={"152px"}
        borderRadius={"16px"}
        variant="shine"
        opacity={"0.3"}
      />
    );
  }
  if (!progress) {
    return null;
  }
  const value = progress?.ticketsCount;
  const plan = progress?.ticketsTarget;

  const getStatus = () => {
    switch (progress.status) {
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
    <S.CardContainer>
      <h1>
        Розыгрыш
        <br />
        автомобиля
      </h1>
      <S.StatusCapsule>
        <Capsule color={getStatus().color} text={getStatus().text} />
      </S.StatusCapsule>
      <Slider.Root value={[value]} max={plan}>
        <Slider.Control>
          <Slider.Track h={13} bg="rgba(32, 39, 61, 0.4)">
            <S.Range
              bg="rgba(189, 243, 93, 1)"
              borderRadius={9}
              _disabled={{ bg: "rgba(189, 243, 93, 1) !important" }}
            />
          </Slider.Track>
        </Slider.Control>
        <HStack justify="space-between" align={"flex-end"}>
          <Text className="valueText">
            <span>Собрано: </span>
            {value.toLocaleString("ru-RU")}
          </Text>

          <Slider.Label>
            <span>Осталось: </span>
            {(plan - value).toLocaleString("ru-RU")}
          </Slider.Label>
        </HStack>
      </Slider.Root>
    </S.CardContainer>
  );
};
