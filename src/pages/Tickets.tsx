import { VStack } from "@chakra-ui/react";
import { NavMenu } from "../components/NavMenu/NavMenu";
import { HeaderCounterCard } from "../components/HeaderCounterCard/HeaderCounterCard";
import { TicketsInfoCard } from "../components/TicketsInfoCard/TicketsInfoCard";

export const Tickets = () => {
  return (
    <VStack minH={"100dvh"} w={"100%"} padding={"20px"}>
      <HeaderCounterCard />
      <TicketsInfoCard />
      <NavMenu />
    </VStack>
  );
};
