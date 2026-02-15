import { Skeleton, Text, VStack } from "@chakra-ui/react";
import { NavMenu } from "../components/NavMenu/NavMenu";
import { PageHeader } from "../components/PageHeader/PageHeader";
import { useQuery } from "@tanstack/react-query";
import type { TicketsList } from "../api/types";
import API from "../api";
import { YourTicketsColumn } from "../components/YourTicketsColumn/YourTicketsColumn";
import { HeaderCounterCard } from "../components/HeaderCounterCard/HeaderCounterCard";
import { useNavigate } from "react-router-dom";

export const Tickets = () => {
  const navigate = useNavigate();
  const { data: tickets, isLoading } = useQuery({
    queryKey: ["ticket/list"],
    queryFn: async (): Promise<TicketsList> => {
      return await API.get("/ticket/list");
    },
  });
  const totalTickets = tickets?.reduce(
    (sum, item) => sum + (item.ticketCount ?? 0),
    0,
  );
  return (
    <VStack
      minH={"calc(100dvh - 60px)"}
      maxH={"calc(100dvh - 60px)"}
      w={"100%"}
      gap={"16px"}
      padding={"20px 20px 0 20px"}
    >
      <PageHeader title="Билеты" onPrev={() => navigate("/")} />
      {!isLoading ? (
        <Skeleton
          variant="shine"
          opacity={"0.3"}
          width={"70%"}
          height={"21px"}
          marginRight={"auto"}
        />
      ) : (
        totalTickets && (
          <Text
            fontWeight={"500"}
            fontSize={"14px"}
            w={"100%"}
            textAlign={"start"}
          >
            Ваши билеты в текущей акции: {totalTickets}
          </Text>
        )
      )}

      <HeaderCounterCard />

      <YourTicketsColumn tickets={tickets} isLoading={isLoading} />
      <NavMenu />
    </VStack>
  );
};
