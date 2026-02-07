import { HStack, Slider} from "@chakra-ui/react";
import * as S from "./RefsCounter.styles";

export const RefsCounter = () => {
  const sended = 10;
  const aprooved = 7;
  return (
    <S.CardContainer>
      <Slider.Root value={[aprooved]} max={sended}>
        <HStack>
          <p className="segment">Билетов за рефералов:</p>
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
        <p className="value">{aprooved.toLocaleString("ru-RU")}</p>
      </HStack>
    </S.CardContainer>
  );
};
