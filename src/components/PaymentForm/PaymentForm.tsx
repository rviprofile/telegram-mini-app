import { Button, HStack, Image, Input, Text, VStack } from "@chakra-ui/react";
import * as S from "./PaymentForm.styles";
import { FormProvider, useForm } from "react-hook-form";

import { useState } from "react";
import { Step } from "../../pages/Buy";

type FormValues = {
  email: string;
  phone: string;
};

export const PaymentForm = ({ setStep }: { setStep: (step: Step) => void }) => {
  const methods = useForm<FormValues>({});
  const { handleSubmit } = methods;
  const [ticketsCount, setTicketsCount] = useState<number>(1);
  const onSubmit = (data: FormValues) => {
    console.log(data);
  };
  return (
    <FormProvider {...methods}>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <Text>Покупка №12345</Text>
        <VStack gap={"32px"} margin={"32px 0 16px 0 "} align={"start"}>
          <HStack w={"100%"} justify={"space-between"}>
            <Button
              borderRadius={8}
              size={"xl"}
              w={"48px"}
              padding={0}
              bg={"#1d5989"}
              _active={{ background: "#2b6da3" }}
              onClick={() =>
                ticketsCount > 1 && setTicketsCount((prev) => prev - 1)
              }
            >
              <Image src={"/icons/minus.svg"} width={"26px"} />
            </Button>
            <Input
              padding={"0 16px"}
              fontSize={"30px"}
              border={"2px dashed #50505077"}
              height={"48px"}
              w={"100%"}
              textAlign={"center"}
              alignItems={"center"}
              borderRadius={8}
              value={ticketsCount}
              type={"number"}
              onChange={(e) => {
                const value = Number(e.target.value);
                setTicketsCount(value);
              }}
              onBlur={() => {
                ticketsCount < 1 && setTicketsCount(1);
              }}
            />
            <Button
              borderRadius={8}
              size={"xl"}
              w={"48px"}
              padding={0}
              bg={"#4e3884"}
              _active={{ background: "#6a51ac" }}
              onClick={() => setTicketsCount((prev) => prev + 1)}
            >
              <Image src={"/icons/plus.svg"} width={"26px"} />
            </Button>
          </HStack>
          <Text>
            <span className="secondary">Сумма: </span>
            {ticketsCount * 500} ₽
          </Text>
        </VStack>{" "}
        <VStack gap={"8px"}>
          <Button
            size={"xl"}
            borderRadius={8}
            color={"white"}
            bg={"#241a4d"}
            h={"42px"}
            width={"100%"}
            padding={"0px 16px"}
            type="submit"
            onClick={() => setStep(Step.Check)}
          >
            Перейти к оплате
            <Image
              src={"/icons/SBP.svg"}
              width={"26px"}
              height={"32px"}
              marginLeft={"10px"}
            />
          </Button>
        </VStack>
      </S.Form>
    </FormProvider>
  );
};
