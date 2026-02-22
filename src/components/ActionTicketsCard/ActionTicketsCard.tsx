import { Button, HStack, Skeleton } from "@chakra-ui/react";
import * as S from "./ActionTicketsCard.styles";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import type { TicketsList, User } from "../../api/types";
import API from "../../api";

export const ActionTicketsCard = ({ user }: { user: User | undefined }) => {
  const navigate = useNavigate();
  const { data: tickets, isLoading } = useQuery({
    queryKey: ["ticket/list"],
    queryFn: async (): Promise<TicketsList> => {
      return await API.get("/ticket/list");
    },
  });
  if (isLoading) {
    return (
      <Skeleton
        width={"100%"}
        height={"108px"}
        borderRadius={"16px"}
        variant="shine"
        opacity={"0.3"}
      />
    );
  }
  if (!tickets || !user) {
    return null;
  }
  const totalTickets = tickets.reduce(
    (sum, item) => sum + (item.ticketCount ?? 0),
    0,
  );
  const refLink = `https://t.me/VoshodLotteryBot?startapp=${user?.referalCode}`;
  return (
    <S.CardContainer>
      <h2>
        Ваши билеты в текущей акции: {totalTickets.toLocaleString("ru-RU")}
      </h2>
      <HStack maxW={"100%"} gap={"8px"}>
        <Button
          size={"xl"}
          borderRadius={8}
          color={"black"}
          bg={"#BDF35D"}
          h={"42px"}
          w={"calc(50% - 4px)"}
          padding={"9px 16px"}
          onClick={() => navigate("/buy")}
        >
          Купить билет
        </Button>
        {!!navigator.share && (
          <Button
            size={"xl"}
            borderRadius={8}
            color={"white"}
            bg={"#F74A78"}
            h={"42px"}
            w={"calc(50% - 4px)"}
            padding={"9px 16px"}
            onClick={() => {
              navigator.share({
                title: `Розыгрыш автомобиля!`,
                url: refLink,
              });
            }}
          >
            Пригласить друга
          </Button>
        )}
      </HStack>
    </S.CardContainer>
  );
};
