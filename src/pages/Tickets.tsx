import { VStack } from "@chakra-ui/react";
import { NavMenu } from "../components/NavMenu/NavMenu";
import { HeaderCounterCard } from "../components/HeaderCounterCard/HeaderCounterCard";
import { TicketsInfoCard } from "../components/TicketsInfoCard/TicketsInfoCard";
import { PageHeader } from "../components/PageHeader/PageHeader";

export const Tickets = () => {
  return (
    <VStack minH={"100dvh"} w={"100%"} padding={"20px"}>
      <PageHeader title="БИЛЕТЫ" />
      <HeaderCounterCard />
      <TicketsInfoCard />
      <NavMenu />
    </VStack>
  );
};
