import { Heading, Text, VStack } from "@chakra-ui/react";
import { NavMenu } from "../components/NavMenu/NavMenu";
import { Image as ChakraImage } from "@chakra-ui/react";
import { PaymentForm } from "../components/PaymentForm/PaymentForm";
import { useState } from "react";

export type Step = "payment" | "check" | "success" | "error";

export const Buy = () => {
  const [step, setStep] = useState<Step>("payment");
  const getStep = () => {
    switch (step) {
      case "payment":
        return <PaymentForm setStep={(step: Step) => setStep(step)} />;
      case "success":
        return <></>;
    }
  };
  const getHeaderText = () => {
    switch (step) {
      case "payment":
        return "Покупка билетов";
      case "success":
        return "Билеты зачислены";
      case "check":
        return "Ждём оплату";
      case "error":
        return "Ошибка";
    }
  };
  const getHeaderIcon = () => {
    switch (step) {
      case "payment":
        return "/icons/ticket.svg";
      case "success":
        return "/icons/success.svg";
      case "check":
        return "/icons/clock.svg";
      case "error":
        return "/icons/error.svg";
    }
  };
  return (
    <VStack
      minH={"calc(100dvh - 60px)"}
      w={"100%"}
      gap={"8px"}
      padding={"32px 16px"}
    >
      <ChakraImage src={getHeaderIcon()} width={"60px"} height={"60px"} />
      <Heading fontSize={"24px"} fontWeight={"600"} marginBottom={"16px"}>
        {getHeaderText()}
      </Heading>
      {getStep()}
      <Text
        fontWeight={"400"}
        fontSize={"12px"}
        color={"rgba(117, 129, 171, 1)"}
      >
        {" "}
        Статус обновляется автоматически{" "}
      </Text>
      <NavMenu />
    </VStack>
  );
};
