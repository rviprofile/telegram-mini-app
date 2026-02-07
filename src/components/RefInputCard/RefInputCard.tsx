import { Button, Field, Grid, Input } from "@chakra-ui/react";
import * as S from "./RefInputCard.styles";

export const RefInputCard = () => {
  return (
    <S.Card>
      <Field.Root>
        <Field.Label className="label-ref">Название</Field.Label>
        <div className="input-wrapper">
          <Input
            className="input-ref"
            value={"https://chakra-ui.com/docs/components/input"}
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
              "https://chakra-ui.com/docs/components/input",
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
