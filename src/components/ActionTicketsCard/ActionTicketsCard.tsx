import { Button, HStack } from "@chakra-ui/react";
import * as S from "./ActionTicketsCard.styles";

export const ActionTicketsCard = () => {
  return (
    <S.CardContainer>
      <h2>Ваши билеты в текущей акции: 3</h2>
      <HStack maxW={"100%"} gap={"8px"}>
        <Button
          size={"xl"}
          borderRadius={8}
          color={"black"}
          bg={"#BDF35D"}
          h={"42px"}
          w={"calc(50% - 4px)"}
          padding={"9px 16px"}
        >
          Купить билет
        </Button>
        <Button
          size={"xl"}
          borderRadius={8}
          color={"white"}
          bg={"#F74A78"}
          h={"42px"}
          w={"calc(50% - 4px)"}
          padding={"9px 16px"}
        >
          Пригласить друга
        </Button>
      </HStack>
    </S.CardContainer>
  );
};
