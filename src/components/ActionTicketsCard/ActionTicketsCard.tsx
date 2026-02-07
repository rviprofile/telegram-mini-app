import { Button, HStack } from "@chakra-ui/react";
import * as S from "./ActionTicketsCard.styles";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import type { TicketsList } from "../../api/types";
import API from "../../api";

export const ActionTicketsCard = () => {
  const navigate = useNavigate();
  const { data: tickets } = useQuery({
    queryKey: ["ticket/list"],
    queryFn: async (): Promise<TicketsList> => {
      return await API.get("/ticket/list");
    },
  });
  if (!tickets) {
    return null;
  }
  const totalTickets = tickets.reduce(
    (sum, item) => sum + (item.ticketCount ?? 0),
    0,
  );
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
