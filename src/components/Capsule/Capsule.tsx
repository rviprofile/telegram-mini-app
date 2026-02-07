import * as S from "./Capsule.styled";

export const Capsule = ({ text, color }: { text: string; color: string }) => {
  return <S.Capsule color={color}>{text}</S.Capsule>;
};
