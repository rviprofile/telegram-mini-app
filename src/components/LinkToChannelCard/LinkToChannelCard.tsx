import { Button } from "@chakra-ui/react";
import * as S from "./LinkToChannelCard.styles";
import { useNavigate } from "react-router-dom";

export const LinkToChannelCard = () => {
  const navigate = useNavigate();
  return (
    <S.CardWrapper>
      <S.CardContainer>
        <Button
          size={"xl"}
          borderRadius={8}
          color={"white"}
          bg={"transparent"}
          h={"42px"}
          padding={"9px 16px"}
          border={"1.5px solid rgba(117, 129, 171, 1)"}
          onClick={() => navigate("https://t.me/voshod_auto")}
        >
          Следить за результатами
        </Button>
      </S.CardContainer>
    </S.CardWrapper>
  );
};
