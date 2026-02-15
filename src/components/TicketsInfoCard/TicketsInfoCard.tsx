import { Button, Grid, HStack, Image, VStack } from "@chakra-ui/react";
import * as S from "./TicketsInfoCard.styles";
import { useNavigate } from "react-router-dom";

export const TicketsInfoCard = () => {
  const tickets = 3;
  const users = 110;
  const date = "10 февраля";
  const navigate = useNavigate();
  return (
    <S.CardContainer>
      <HStack gap={"8px"}>
        <S.InfoBox>
          <Image src="/icons/tickets/wallet.svg" />
          <p>Ваш вклад:</p>
          <p>{tickets}</p>
        </S.InfoBox>
        <S.InfoBox>
          <Image src="/icons/tickets/users.svg" />
          <p>Участники:</p>
          <p>{users}</p>
        </S.InfoBox>
        <S.InfoBox>
          <Image src="/icons/tickets/calendar.svg" />
          <p>Дата среза:</p>
          <p>{date}</p>
        </S.InfoBox>
      </HStack>
      <Grid templateColumns={"1fr 0px 1fr 0px 1fr"}>
        <VStack h={"84px"}>
          <S.MapPoint></S.MapPoint>
          <S.PointLabel>
            Приём <br />
            билетов
          </S.PointLabel>
        </VStack>
        <Image src={"icons/tickets/arrow.svg"} className="arrow" />
        <VStack h={"84px"}>
          <S.MapPoint></S.MapPoint>
          <S.PointLabel>
            Срез <br /> списка
          </S.PointLabel>
        </VStack>
        <Image src={"icons/tickets/arrow.svg"} className="arrow" />
        <VStack h={"84px"}>
          <S.MapPoint></S.MapPoint>
          <S.PointLabel>
            Определение
            <br /> побелителя
          </S.PointLabel>
        </VStack>
      </Grid>
      <VStack>
        <Button
          size={"xl"}
          borderRadius={8}
          color={"black"}
          bg={"#BDF35D"}
          h={"42px"}
          width={"100%"}
          padding={"9px 16px"}
          onClick={() => navigate("/buy")}
        >
          Купить билеты
        </Button>
        <Button
          size={"xl"}
          borderRadius={8}
          color={"black"}
          bg={"transparent"}
          border={"1px solid rgba(204, 207, 222, 1)"}
          h={"42px"}
          width={"100%"}
          padding={"9px 16px"}
          onClick={() => navigate("/docs")}
        >
          Правила
        </Button>
      </VStack>
    </S.CardContainer>
  );
};
