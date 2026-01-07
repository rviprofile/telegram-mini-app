import { VStack } from "@chakra-ui/react";
import { NavMenu } from "../components/ui/NavMenu/NavMenu";
import { Capsule } from "../components/ui/Capsule/Capsule";
import { PrizePreviewCard } from "../components/ui/PrizePreviewCard/PrizePreviewCard";

export const Home = () => {
  return (
    <VStack minH={"100vh"} w={"100%"} padding={"20px"}>
      <Capsule text={"Текущая акция"} />
      <h1>Розыгрыш автомобиля</h1>
      <PrizePreviewCard image={"/images/kiario.jpg"} />
      <NavMenu />
    </VStack>
  );
};
