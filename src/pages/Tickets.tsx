import { Text, VStack } from "@chakra-ui/react";
import { NavMenu } from "../components/NavMenu/NavMenu";
import { PageHeader } from "../components/PageHeader/PageHeader";
import { useQuery } from "@tanstack/react-query";
import type { LotteryProgress, TicketsList } from "../api/types";
import API from "../api";
import { YourTicketsColumn } from "../components/YourTicketsColumn/YourTicketsColumn";
import { HeaderCounterCard } from "../components/HeaderCounterCard/HeaderCounterCard";

export const Tickets = () => {
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
    <VStack
      minH={"calc(100dvh - 60px)"}
      w={"100%"}
      padding={"20px"}
      gap={"12px"}
    >
      <PageHeader title="БИЛЕТЫ" />
      <Text fontWeight={"500"} fontSize={"14px"} w={"100%"} textAlign={"start"}>
        Ваши билеты в текущей акции: {totalTickets}
      </Text>
      <HeaderCounterCard />
      <YourTicketsColumn tickets={tickets} />
      <NavMenu />
    </VStack>
  );
};
