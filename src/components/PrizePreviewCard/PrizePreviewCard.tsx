import { useNavigate } from "react-router-dom";
import * as S from "./PrizePreviewCard.styles";
import type { Car } from "../../api/types";
import { useQuery } from "@tanstack/react-query";
import API from "../../api";

export const PrizePreviewCard = () => {
  const { data: car } = useQuery({
    queryKey: ["car"],
    queryFn: async (): Promise<Car> => {
      return await API.get("/car");
    },
  });
  const navigate = useNavigate();
  if (!car) {
    return null;
  }
  return (
    <S.CardContainer
      image={car?.image}
      onClick={() => {
        navigate("/car");
      }}
    >
      <S.CornerBadge>Приз</S.CornerBadge>
      <S.OpenButton>Смотреть авто</S.OpenButton>
    </S.CardContainer>
  );
};
