import { useNavigate } from "react-router-dom";
import * as S from "./PrizePreviewCard.styles";

export const PrizePreviewCard = ({ image }: { image: string }) => {
  const navigate = useNavigate();
  return (
    <S.CardContainer
      image={image}
      onClick={() => {
        navigate("/car");
      }}
    >
      <S.CornerBadge>Приз</S.CornerBadge>
      <S.OpenButton>Смотреть авто</S.OpenButton>
    </S.CardContainer>
  );
};
