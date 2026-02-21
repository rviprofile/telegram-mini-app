import { Button, Grid, Image, Text, VStack } from "@chakra-ui/react";
import * as S from "./CheckPurchasestyles";
import { useNavigate } from "react-router-dom";

export const CheckPurchase = ({
  purchasedTickets,
}: {
  purchasedTickets: number;
}) => {
  const navigate = useNavigate();
  return (
    <VStack gap={"24px"} w={"100%"}>
      <S.CardContainer>
        <Text fontWeight={600}>
          {purchasedTickets > 1 ? "Билеты начислены" : "Билет начислен"}
        </Text>
        <Text
          fontWeight={700}
          fontSize={"36px"}
          marginBottom={"8px"}
        >{`+${purchasedTickets} билет`}</Text>

        <Text>Ваши билеты в текущей акции:</Text>
        <Text>Итого билетов:</Text>
        <Button
          size={"xl"}
          borderRadius={8}
          color={"black"}
          bg={"#BDF35D"}
          h={"42px"}
          padding={"9px 16px"}
          onClick={() => navigate("/tickets")}
          marginTop={"16px"}
        >
          Перейти к билетам
        </Button>
      </S.CardContainer>
    </VStack>
  );
};
