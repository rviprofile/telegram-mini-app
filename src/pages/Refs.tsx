import { VStack } from "@chakra-ui/react";
import { NavMenu } from "../components/NavMenu/NavMenu";
import { PageHeader } from "../components/PageHeader/PageHeader";
import { useNavigate } from "react-router-dom";
import { RefInputCard } from "../components/RefInputCard/RefInputCard";

export const Refs = () => {
  const navigate = useNavigate();
  return (
    <VStack minH={"100dvh"} w={"100%"} gap={"16px"}>
      <PageHeader title="Рефералы" onPrev={() => navigate("/")} />
      <VStack w={"100%"} padding={"0 16px"}>
        <RefInputCard />
      </VStack>
      <NavMenu />
    </VStack>
  );
};
