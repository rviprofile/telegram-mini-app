import { HStack, Skeleton, Slider } from "@chakra-ui/react";
import * as S from "./RefsCounter.styles";

export const RefsCounter = () => {
  const sended = 10;
  const aprooved = 7;
  const tickets = 1;
  const isLoading = false;
  if (isLoading) {
    return (
      <Skeleton
        width={"100%"}
        height={"91px"}
        borderRadius={"16px"}
        variant="shine"
        opacity={"0.3"}
      />
    );
  }
  return (
    <S.CardContainer>
      <Slider.Root value={[aprooved]} max={sended}>
        <HStack>
          <p className="segment">Защитано:</p>
          <p className="value">
            {aprooved.toLocaleString("ru-RU")} /{" "}
            {sended.toLocaleString("ru-RU")}
          </p>
        </HStack>
        <Slider.Control>
          <Slider.Track h={13} bg="rgba(32, 39, 61, 0.4)">
            <S.Range
              bg="rgba(189, 243, 93, 1)"
              borderRadius={9}
              _disabled={{ bg: "rgba(189, 243, 93, 1) !important" }}
            />
          </Slider.Track>
        </Slider.Control>
      </Slider.Root>
      <HStack>
        <p className="segment">Билетов за рефералов:</p>
        <p className="value">{tickets.toLocaleString("ru-RU")}</p>
      </HStack>
    </S.CardContainer>
  );
};
