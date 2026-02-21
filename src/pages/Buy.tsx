import { Heading, Loader, Text, VStack } from "@chakra-ui/react";
import { NavMenu } from "../components/NavMenu/NavMenu";
import { Image as ChakraImage } from "@chakra-ui/react";
import { PaymentForm } from "../components/PaymentForm/PaymentForm";
import { useEffect, useState } from "react";
import { SuccessfulPurchase } from "../components/SuccessfulPurchase/SuccessfulPurchase";
import { useQuery } from "@tanstack/react-query";
import API from "../api";
import type { CreatePaymentResult, TransactionById } from "../api/types";

export const Step = {
  Payment: "payment",
  Check: "check",
  Success: "success",
  Error: "error",
} as const;

export type Step = (typeof Step)[keyof typeof Step];

export const Buy = () => {
  const [step, setStep] = useState<Step>(Step.Payment);
  const [createPaymetResult, setCreatePaymentResult] =
    useState<CreatePaymentResult | null>(null);
  const transactionId = createPaymetResult?.id;

  const { data: transactionCompleteData } = useQuery<TransactionById>({
    queryKey: ["transaction/complete", transactionId],
    queryFn: async () => {
      const res = await API.get<TransactionById>(
        `/transaction/complete/${transactionId}`,
      );
      return res;
    },
    enabled: Boolean(transactionId),
    refetchInterval: (query) =>
      query.state.data?.status !== "create" ? false : 1000,
  });

  useEffect(
    () => console.log(transactionCompleteData),
    [transactionCompleteData],
  );

  const getStep = () => {
    switch (step) {
      case Step.Payment:
        return (
          <PaymentForm
            setStep={(step: Step) => setStep(step)}
            setCreatePaymentResult={setCreatePaymentResult}
          />
        );
      case Step.Check:
        return <Loader width={"20vw"} height={"20vw"} />;
      case Step.Success:
        return <SuccessfulPurchase purchasedTickets={2} />;
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

  useEffect(() => {
    console.log(createPaymetResult);
  }, [createPaymetResult]);

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
