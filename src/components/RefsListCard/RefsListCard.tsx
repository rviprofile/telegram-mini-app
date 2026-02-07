import { HStack, Image, VStack } from "@chakra-ui/react";
import * as S from "./RefsListCard.styles";

export const RefsListCard = () => {
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
          <S.StatusCapsule status="valid">VALID</S.StatusCapsule>
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
          <S.StatusCapsule status="pending">PENDING</S.StatusCapsule>
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
