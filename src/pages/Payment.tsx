import { Heading, VStack } from "@chakra-ui/react";
import { NavMenu } from "../components/NavMenu/NavMenu";
import { Image as ChakraImage } from "@chakra-ui/react";
import { PaymentForm } from "../components/PaymentForm/PaymentForm";
import { useState } from "react";

export type Step = "payment" | "success" | "error";

export const Payment = () => {
  const [step, setStep] = useState<Step>("payment");
  const getStep = () => {
    switch (step) {
      case "payment":
        return <PaymentForm setStep={setStep} />;
      case "success":
        return <></>;
    }
  };
  return (
    <VStack minH={"100dvh"} w={"100%"} gap={"12px"} padding={"32px 16px"}>
      <ChakraImage src={"/icons/clock.svg"} />
      <Heading fontSize={"24px"} fontWeight={"600"} marginBottom={"16px"}>
        Ожидаем <br /> подтверждене оплаты
      </Heading>
      {getStep()}
      <NavMenu />
    </VStack>
  );
};
