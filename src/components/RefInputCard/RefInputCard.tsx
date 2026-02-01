import { Button, Field, Grid, Input } from "@chakra-ui/react";
import * as S from "./RefInputCard.styles";

export const RefInputCard = () => {
  return (
    <S.Card>
      <Field.Root>
        <Field.Label className="label-ref">Название</Field.Label>
        <Input
          placeholder="Enter your email"
          className="input-ref"
          variant="subtle"
          value={"https://chakra-ui.com/docs/components/input"}
          disabled
        />
      </Field.Root>
      <Grid gridTemplateColumns={"1fr 1fr"} w={"100%"} gap={"8px"}>
        <Button variant={"outline"} width={"100%"}>
          Скопировать
        </Button>
        <Button variant={"outline"} width={"100%"}>
          Поделиться
        </Button>
      </Grid>
    </S.Card>
  );
};
