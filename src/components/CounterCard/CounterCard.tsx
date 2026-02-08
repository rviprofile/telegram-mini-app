import { HStack, Skeleton, Slider, Text, VStack } from "@chakra-ui/react";
import * as S from "./ConterCard.styles";
import type { LotteryProgress } from "../../api/types";
import { useQuery } from "@tanstack/react-query";
import API from "../../api";

export const CounterCard = () => {
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
        height={"138px"}
        borderRadius={"16px"}
        variant="shine"
        opacity={"0.3"}
      />
    );
  }
  if (!progress) {
    return null;
  }
  const plan = progress.ticketsTarget;
  const value = progress.ticketsCount;
  return (
    <S.CardContainer>
      <Slider.Root value={[value]} max={plan}>
        <HStack justify="space-between" align={"flex-end"}>
          <Text className="valueText">{value.toLocaleString("ru-RU")}</Text>

          <Slider.Label>{plan.toLocaleString("ru-RU")}</Slider.Label>
        </HStack>
        <Slider.Control>
          <Slider.Track h={13} bg="rgba(32, 39, 61, 0.4)">
            <S.Range
              bg="rgba(189, 243, 93, 1)"
              borderRadius={9}
              _disabled={{ bg: "rgba(189, 243, 93, 1) !important" }}
            />
          </Slider.Track>
        </Slider.Control>
      </Slider.Root>
      <HStack justify={"space-between"}>
        <VStack align={"flex-start"}>
          <p className="segment">Собрано билетов:</p>
          <p className="value">{value.toLocaleString("ru-RU")}</p>
        </VStack>
        <VStack align={"flex-start"}>
          <p className="segment">Нужно всего:</p>
          <p className="value">{plan.toLocaleString("ru-RU")}</p>
        </VStack>
        <VStack align={"flex-start"}>
          <p className="segment">Осталось:</p>
          <p className="value">
            {progress.ticketsLeft.toLocaleString("ru-RU")}
          </p>
        </VStack>
      </HStack>
    </S.CardContainer>
  );
};
