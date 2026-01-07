import * as S from "./PrizePreviewCard.styles";

export const PrizePreviewCard = ({ image }: { image: string }) => {
  return (
    <S.CardContainer image={image}>
      <S.CornerBadge>Приз</S.CornerBadge>
      <S.OpenButton>Смотреть авто</S.OpenButton>
    </S.CardContainer>
  );
};
