import { Button, Field, Grid, Input, Skeleton } from "@chakra-ui/react";
import * as S from "./RefInputCard.styles";

export const RefInputCard = () => {
  const isLoading = false;
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
  return (
    <S.Card>
      <Field.Root>
        <Field.Label className="label-ref">Название</Field.Label>
        <div className="input-wrapper">
          <Input
            className="input-ref"
            value={"https://t.me/VoshodLotteryBot?startapp=ref_777"}
            onChange={() => {}}
          />
        </div>
      </Field.Root>
      <Grid gridTemplateColumns={"1fr 1fr"} w={"100%"} gap={"8px"}>
        <Button
          variant={"outline"}
          width={"100%"}
          onClick={() =>
            navigator.clipboard.writeText(
              "https://t.me/VoshodLotteryBot?startapp=ref_777",
            )
          }
        >
          Скопировать
        </Button>
        <Button variant={"outline"} width={"100%"}>
          Поделиться
        </Button>
      </Grid>
    </S.Card>
  );
};
