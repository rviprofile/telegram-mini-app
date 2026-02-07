import { Heading, VStack } from "@chakra-ui/react";
import { NavMenu } from "../components/NavMenu/NavMenu";
import { Image as ChakraImage } from "@chakra-ui/react";
import { PaymentForm } from "../components/PaymentForm/PaymentForm";

export const Payment = () => {
  return (
    <VStack minH={"100dvh"} w={"100%"} gap={"12px"} padding={"32px 16px"}>
      <ChakraImage src={"/icons/clock.svg"} />
      <Heading fontSize={"24px"} fontWeight={"600"} marginBottom={"16px"}>
        Ожидаем <br /> подтверждене оплаты
      </Heading>
      <PaymentForm />
      <NavMenu />
    </VStack>
  );
};
