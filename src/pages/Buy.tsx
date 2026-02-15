import { Heading, Text, VStack } from "@chakra-ui/react";
import { NavMenu } from "../components/NavMenu/NavMenu";
import { Image as ChakraImage } from "@chakra-ui/react";
import { PaymentForm } from "../components/PaymentForm/PaymentForm";
import { useState } from "react";

export const Step = {
  Payment: "payment",
  Check: "check",
  Success: "success",
  Error: "error",
} as const;

export type Step = (typeof Step)[keyof typeof Step];

export const Buy = () => {
  const [step, setStep] = useState<Step>(Step.Payment);
  // const { data } = useQuery({
  //   queryKey: ["payment-status", paymentId],
  //   queryFn: () => getPaymentStatus(paymentId),
  //   enabled: !!paymentId,
  //   refetchInterval: (data) => {
  //     if (!data) return 3000; // если еще нет ответа
  //     if (data.status === "SUCCESS") return false; // остановить
  //     return 3000; // иначе продолжать
  //   },
  // });
  const getStep = () => {
    switch (step) {
      case Step.Payment:
        return <PaymentForm setStep={(step: Step) => setStep(step)} />;
      case Step.Success:
        return <></>;
    }
  };
  const getHeaderText = () => {
    switch (step) {
      case Step.Payment:
        return "Покупка билетов";
      case Step.Success:
        return "Билеты зачислены";
      case Step.Check:
        return "Ждём оплату";
      case Step.Error:
        return "Ошибка";
    }
  };
  const getHeaderIcon = () => {
    switch (step) {
      case Step.Payment:
        return "/icons/ticket.svg";
      case Step.Success:
        return "/icons/success.svg";
      case Step.Check:
        return "/icons/clock.svg";
      case Step.Error:
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
