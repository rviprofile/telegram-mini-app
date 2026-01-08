import { HStack, Slider, Text, VStack } from "@chakra-ui/react";
import * as S from "./ConterCard.styles";

export const CounterCard = () => {
  const plan = 10000;
  const value = 1200;
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
          <p className="value">{(plan - value).toLocaleString("ru-RU")}</p>
        </VStack>
      </HStack>
    </S.CardContainer>
  );
};
