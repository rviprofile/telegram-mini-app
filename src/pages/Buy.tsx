import { Heading, Loader, Text, VStack } from "@chakra-ui/react";
import { NavMenu } from "../components/NavMenu/NavMenu";
import { Image as ChakraImage } from "@chakra-ui/react";
import { PaymentForm } from "../components/PaymentForm/PaymentForm";
import { useEffect, useRef, useState } from "react";
import { SuccessfulPurchase } from "../components/SuccessfulPurchase/SuccessfulPurchase";
import { useQuery } from "@tanstack/react-query";
import API from "../api";
import type { CreatePaymentResult, TransactionById } from "../api/types";
import { openLink } from "@tma.js/sdk";

export const Step = {
  Payment: "payment",
  Check: "check",
  Success: "success",
  Error: "error",
} as const;

export type Step = (typeof Step)[keyof typeof Step];

export const Buy = () => {
  const [step, setStep] = useState<Step>(Step.Payment);
  const [createPaymentResult, setCreatePaymentResult] =
    useState<CreatePaymentResult | null>(null);
  const [purchasedTickets, setPurchasedTickets] = useState<number>(1);
  const transactionId = createPaymentResult?.id;

  const POLLING_TIMEOUT_MS = 3 * 60 * 1000; // 3 минуты
  const pollingStartedAt = useRef<number | null>(null);

  const { data: transactionCompleteData } = useQuery<TransactionById>({
    queryKey: ["/transaction/", transactionId],
    queryFn: async () => {
      const res = await API.get<TransactionById>(
        `/transaction/${transactionId}`,
      );
      return res;
    },
    enabled: step === Step.Check,
    refetchInterval: (query) => {
      // Фиксируем время первого запроса
      if (!pollingStartedAt.current) {
        pollingStartedAt.current = Date.now();
      }

      const isTimeout =
        Date.now() - pollingStartedAt.current > POLLING_TIMEOUT_MS;
      const isCompleted =
        query.state.data?.status === "complete" ||
        query.state.data?.success === "failed" ||
        query.state.data?.success === false;

      if (isTimeout || isCompleted) {
        if (isTimeout) {
          setCreatePaymentResult(null);
          setStep(Step.Payment);
          setPurchasedTickets(1);
        }
        pollingStartedAt.current = null;
        return false;
      }

      return 1000;
    },
  });

  useEffect(() => {
    if (transactionId && createPaymentResult?.url) {
      setStep(Step.Check);

      const url = createPaymentResult.url;

      if (!!openLink) {
        // Открывает внешнюю ссылку через нативный браузер устройства
        openLink(url);
      } else {
        // Фолбэк для браузера вне Telegram
        window.open(url, "_blank");
      }
    }
  }, [transactionId, createPaymentResult]);

  useEffect(() => {
    if (
      transactionCompleteData?.status === "complete" ||
      transactionCompleteData?.success === true
    ) {
      setCreatePaymentResult(null);
      setStep(Step.Success);
    }

    if (
      transactionCompleteData?.success === "error" ||
      transactionCompleteData?.success === false
    ) {
      setCreatePaymentResult(null);
      setStep(Step.Error);
    }
  }, [transactionCompleteData]);

  useEffect(() => {
    if (step === Step.Check) {
      return;
    }
    setCreatePaymentResult(null);
    setStep(Step.Payment);
    setPurchasedTickets(1);
  }, []);

  const getStep = () => {
    switch (step) {
      case Step.Payment:
        return (
          <PaymentForm
            setStep={(step: Step) => setStep(step)}
            setCreatePaymentResult={setCreatePaymentResult}
            setPurchasedTickets={setPurchasedTickets}
          />
        );
      case Step.Check:
        return <Loader width={"20vw"} height={"20vw"} />;
      case Step.Success:
        return <SuccessfulPurchase purchasedTickets={purchasedTickets} />;
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
      {step === Step.Check && (
        <Text
          fontWeight={"400"}
          fontSize={"12px"}
          color={"rgba(117, 129, 171, 1)"}
        >
          {" "}
          Статус обновляется автоматически{" "}
        </Text>
      )}
      <NavMenu />
    </VStack>
  );
};
