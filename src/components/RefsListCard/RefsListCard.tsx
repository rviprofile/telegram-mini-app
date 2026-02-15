import { HStack, Image, Skeleton, VStack } from "@chakra-ui/react";
import * as S from "./RefsListCard.styles";

export const Status = {
  Sended: "sended",
  Correct: "correct",
} as const;

export type Status = (typeof Status)[keyof typeof Status];

export const RefsListCard = () => {
  const isLoading = false;
  if (isLoading) {
    return (
      <Skeleton
        width={"100%"}
        height={"246px"}
        borderRadius={"16px"}
        variant="shine"
        opacity={"0.3"}
      />
    );
  }
  return (
    <S.Container>
      <VStack className="header" align={"start"}>
        <p>До следующего билета:</p>
        <p className="header_value">3 приглашённых</p>
      </VStack>
      <S.Content>
        <S.Ref>
          <HStack gap={"8px"}>
            <Image
              src={""}
              width={"36px"}
              height={"36px"}
              borderRadius={"20px"}
              background={"rgba(163, 165, 169, 0.5)"}
              border={"none"}
            />
            <VStack align={"start"}>
              <p className="primary">Фамилия</p>
              <p className="secondary">приглашённый</p>
            </VStack>
          </HStack>
          <S.StatusCapsule status={Status.Correct}>
            {Status.Sended && "В теме"}
          </S.StatusCapsule>
        </S.Ref>
        <S.Ref>
          <HStack gap={"8px"}>
            <Image
              src={""}
              width={"36px"}
              height={"36px"}
              borderRadius={"20px"}
              background={"rgba(163, 165, 169, 0.5)"}
              border={"none"}
            />
            <VStack align={"start"}>
              <p className="primary">Фамилия</p>
              <p className="secondary">приглашённый</p>
            </VStack>
          </HStack>
          <S.StatusCapsule status={Status.Sended}>Отправлено</S.StatusCapsule>
        </S.Ref>
        <S.Ref>
          <HStack gap={"8px"}>
            <Image
              src={""}
              width={"36px"}
              height={"36px"}
              borderRadius={"20px"}
              background={"rgba(163, 165, 169, 0.5)"}
              border={"none"}
            />
            <VStack align={"start"}>
              <p className="primary">Фамилия</p>
              <p className="secondary">приглашённый</p>
            </VStack>
          </HStack>
          <S.StatusCapsule status="rejected">REJECTED</S.StatusCapsule>
        </S.Ref>
      </S.Content>
    </S.Container>
  );
};
