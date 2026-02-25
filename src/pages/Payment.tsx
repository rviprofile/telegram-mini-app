import { VStack } from "@chakra-ui/react";
import { NavMenu } from "../components/NavMenu/NavMenu";

export type Step = "payment" | "success" | "error";

export const Payment = () => {
  return (
    <VStack
      minH={"calc(100dvh - 74px)"}
      w={"100%"}
      gap={"12px"}
      padding={"32px 16px"}
    >
      <NavMenu />
    </VStack>
  );
};
