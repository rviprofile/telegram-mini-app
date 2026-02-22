import { Button, Field, Grid, Input, Skeleton } from "@chakra-ui/react";
import * as S from "./RefInputCard.styles";
import { useState } from "react";
import type { User } from "../../api/types";

export const RefInputCard = ({
  user,
  isLoading,
}: {
  user?: User;
  isLoading: boolean;
}) => {
  const [copyButtonText, setCopyButtonText] = useState<
    "Скопировать" | "Скопировано"
  >("Скопировать");

  if (isLoading) {
    return (
      <Skeleton
        width={"100%"}
        height={"148px"}
        borderRadius={"16px"}
        variant="shine"
        opacity={"0.3"}
      />
    );
  }
  if (!user) {
    return null;
  }
  const refLink = `https://t.me/VoshodLotteryBot?startapp=${user.referalCode}`;

  return (
    <S.Card>
      <Field.Root>
        <Field.Label className="label-ref">Ваша реферальная ссылка</Field.Label>
        <div className="input-wrapper">
          <Input
            className="input-ref"
            value={refLink}
            onChange={() => {}}
            onClick={() => navigator.clipboard.writeText(refLink)}
          />
        </div>
      </Field.Root>
      <Grid gridTemplateColumns={"1fr 1fr"} w={"100%"} gap={"8px"}>
        <Button
          variant={"outline"}
          width={"100%"}
          color={"white"}
          onClick={() => {
            navigator.clipboard.writeText(refLink);
            setCopyButtonText("Скопировано");
            setTimeout(() => setCopyButtonText("Скопировать"), 3000);
          }}
        >
          {copyButtonText}
        </Button>
        {!!navigator.share && (
          <Button
            color={"white"}
            variant={"outline"}
            width={"100%"}
            onClick={() => {
              navigator.share({
                title: `Розыгрыш автомобиля!`,
                url: refLink,
              });
            }}
          >
            Поделиться
          </Button>
        )}
      </Grid>
    </S.Card>
  );
};
