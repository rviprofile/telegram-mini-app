import { Button, Grid, Image, Text, VStack } from "@chakra-ui/react";
import * as S from "./SuccessfulPurchase.styles";
import { useNavigate } from "react-router-dom";
import { pluralizeRu } from "../../utils/pluralizeRu";

export const SuccessfulPurchase = ({
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
        >{`+${purchasedTickets} ${pluralizeRu(purchasedTickets, "билет", "билета", "билетов")}`}</Text>

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
      <Grid
        w="100%"
        templateColumns="repeat(5, 1fr)"
        rowGap="8px"
        alignItems="center"
      >
        {/* Row 1 */}
        <S.MapPoint gridColumn="1" />
        <Image
          gridColumn="2"
          src="icons/tickets/arrow.svg"
          width="54px"
          height="10px"
        />
        <S.MapPoint gridColumn="3" />
        <Image
          gridColumn="4"
          src="icons/tickets/arrow.svg"
          width="54px"
          height="10px"
        />
        <S.MapPoint gridColumn="5" />

        {/* Row 2 */}
        <S.PointLabel gridColumn="1 / 3" textAlign="center">
          Приём <br /> билетов
        </S.PointLabel>
        <S.PointLabel gridColumn="3 / 5" textAlign="center">
          Срез <br /> списка
        </S.PointLabel>
        <S.PointLabel gridColumn="5 / 6" textAlign="center">
          Определение <br /> победителя
        </S.PointLabel>
      </Grid>
    </VStack>
  );
};
