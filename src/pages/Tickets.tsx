import { VStack } from "@chakra-ui/react";
import { NavMenu } from "../components/NavMenu/NavMenu";
import { HeaderCounterCard } from "../components/HeaderCounterCard/HeaderCounterCard";
import { TicketsInfoCard } from "../components/TicketsInfoCard/TicketsInfoCard";
import { PageHeader } from "../components/PageHeader/PageHeader";
import { useQuery } from "@tanstack/react-query";
import type { TicketsList } from "../api/types";
import API from "../api";

export const Tickets = () => {
  const { data: tickets } = useQuery({
    queryKey: ["ticket/list"],
    queryFn: async (): Promise<TicketsList> => {
      return await API.get("/ticket/list");
    },
  });
  console.log(tickets);
  return (
    <VStack minH={"100dvh"} w={"100%"} padding={"20px"}>
      <PageHeader title="БИЛЕТЫ" />
      <HeaderCounterCard />
      <TicketsInfoCard />
      <NavMenu />
    </VStack>
  );
};
