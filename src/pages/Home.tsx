import { HStack, VStack } from "@chakra-ui/react";
import { NavMenu } from "../components/NavMenu/NavMenu";
import { Capsule } from "../components/Capsule/Capsule";
import { PrizePreviewCard } from "../components/PrizePreviewCard/PrizePreviewCard";
import { CounterCard } from "../components/CounterCard/CounterCard";
import { ActionTicketsCard } from "../components/ActionTicketsCard/ActionTicketsCard";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <VStack minH={"calc(100dvh - 60px)"} w={"100%"} padding={"20px"}>
      <Capsule text={"Текущая акция"} />
      <h1>Розыгрыш автомобиля</h1>
      <PrizePreviewCard />
      <CounterCard />
      <ActionTicketsCard />

      <HStack>
        <Link className={"default"} to={"/rules"}>
          Как определяется победитель
        </Link>
        <Link className={"default"} to={"/rules"}>
          Правила
        </Link>
      </HStack>

      <NavMenu />
    </VStack>
  );
};
