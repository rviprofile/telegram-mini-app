import { Image } from "@chakra-ui/react";
import * as S from "./PageHeader.styles";

export const PageHeader = ({
  title,
  onPrev,
}: {
  title: string;
  onPrev?: () => void;
}) => {
  return (
    <S.Header>
      {!!onPrev && (
        <S.BackButton onClick={onPrev}>
          <Image src={`/icons/chevron-left.svg`} />
        </S.BackButton>
      )}
      <S.Title>{title}</S.Title>
      <S.BackButton></S.BackButton>
    </S.Header>
  );
};
