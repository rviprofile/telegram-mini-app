import { HStack, Slider, Text } from "@chakra-ui/react";
import { Capsule } from "../Capsule/Capsule";
import * as S from "./HeaderCounterCard.styles";

export const HeaderCounterCard = () => {
  const value = 1200;
  const plan = 10000;
  return (
    <S.CardContainer>
      <h1>
        Розыгрыш
        <br />
        автомобиля
      </h1>
      <S.StatusCapsule>
        <Capsule text="Активна" />
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
