import { Button, Text, VStack } from "@chakra-ui/react";
import { withMask } from "use-mask-input";
import * as S from "./PaymentForm.styles";
import { FormProvider, useForm } from "react-hook-form";

type FormValues = {
  email: string;
  phone: string;
};

export const PaymentForm = () => {
  const methods = useForm<FormValues>({});
  const { register, handleSubmit } = methods;
  const phoneRegister = register("phone");
  const onSubmit = (data: FormValues) => {
    console.log(data);
  };
  return (
    <FormProvider {...methods}>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <Text>Заказ №12345</Text>
        <VStack gap={"8px"} margin={"16px 0"} align={"start"}>
          <Text>
            <span className="secondary">Сумма: </span>500 ₽
          </Text>
          <Text>
            <span className="secondary">Провайдер: </span>Т-Банк
          </Text>
          <Text>
            <span className="secondary">Время: </span>14:32
          </Text>
        </VStack>{" "}
        <VStack gap={"8px"} marginBottom={"18px"}>
          <S.FormInput
            placeholder="Email"
            type="email"
            {...register("email", {
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Некорректный email",
              },
            })}
          />
          <S.FormInput
            placeholder="Телефон"
            {...phoneRegister}
            ref={(el) => {
              phoneRegister.ref(el);
              withMask("+7 (999) 999-99-99")(el);
            }}
          />
        </VStack>
        <VStack gap={"8px"}>
          <Button
            size={"xl"}
            borderRadius={8}
            color={"black"}
            bg={"#BDF35D"}
            h={"42px"}
            width={"100%"}
            padding={"9px 16px"}
            type="submit"
          >
            Перейти к оплте (Т-Банк)
          </Button>
          <Button
            size={"xl"}
            borderRadius={8}
            color={"black"}
            bg={"transparent"}
            border={"1px solid rgba(204, 207, 222, 1)"}
            h={"42px"}
            width={"100%"}
            padding={"9px 16px"}
            onClick={() => {}}
          >
            Открыть чек
          </Button>
        </VStack>
      </S.Form>

      <Text
        fontWeight={"400"}
        fontSize={"12px"}
        color={"rgba(117, 129, 171, 1)"}
      >
        {" "}
        Статус обновится автоматически{" "}
      </Text>
    </FormProvider>
  );
};
