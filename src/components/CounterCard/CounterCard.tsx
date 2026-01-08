import { HStack, Slider, VStack } from "@chakra-ui/react";
import * as S from "./ConterCard.styles";

export const CounterCard = () => {
  const plan = 10000;
  const value = 300;
  return (
    <S.CardContainer>
      <Slider.Root defaultValue={[value]} max={plan} disabled>
        <HStack justify="space-between" align={"flex-end"}>
          <Slider.ValueText />

          <Slider.Label>{plan}</Slider.Label>
        </HStack>
        <Slider.Control>
          <Slider.Track h={13} bg="rgba(32, 39, 61, 0.4)">
            <Slider.Range bg="rgba(189, 243, 93, 1)" borderRadius={9} />
          </Slider.Track>
        </Slider.Control>
      </Slider.Root>
      <HStack justify={"space-between"}>
        <VStack align={"flex-start"}>
          <p className="segment">Собрано билетов:</p>
          <p className="value">{value}</p>
        </VStack>
        <VStack align={"flex-start"}>
          <p className="segment">Нужно всего:</p>
          <p className="value">{plan}</p>
        </VStack>
        <VStack align={"flex-start"}>
          <p className="segment">Осталось:</p>
          <p className="value">{plan - value}</p>
        </VStack>
      </HStack>
    </S.CardContainer>
  );
};
