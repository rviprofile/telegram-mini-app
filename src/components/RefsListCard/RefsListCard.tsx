import { HStack, Image, Skeleton, VStack } from "@chakra-ui/react";
import * as S from "./RefsListCard.styles";
import type { ReferalList, ReferalStats } from "../../api/types";
import { pluralizeRu } from "../../utils/pluralizeRu";

export const Status = {
  Sended: "sended",
  Active: "active",
} as const;

export type Status = (typeof Status)[keyof typeof Status];

export const RefsListCard = ({
  refs,
  stats,
  isLoading,
}: {
  refs?: ReferalList;
  stats?: ReferalStats;
  isLoading: boolean;
}) => {
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
      {stats && (
        <VStack className="header" align={"start"}>
          <p>До следующего билета:</p>
          <p className="header_value">
            {stats?.collectedToNext}{" "}
            {pluralizeRu(
              stats?.collectedToNext,
              "приглашенный",
              "приглашенных",
              "приглашенных",
            )}
          </p>
        </VStack>
      )}
      <S.Content>
        {refs?.map((ref) => {
          return (
            <S.Ref key={ref.id}>
              <HStack gap={"8px"}>
                <Image
                  src={ref.avatar}
                  width={"36px"}
                  height={"36px"}
                  borderRadius={"20px"}
                  background={"rgba(163, 165, 169, 0.5)"}
                  border={"none"}
                />
                <VStack align={"start"}>
                  <p className="primary">{`${ref.firstName ?? ""} ${ref.lastName ?? ""}`}</p>
                  <p className="secondary">приглашённый</p>
                </VStack>
              </HStack>
              <S.StatusCapsule status={ref.status}>
                {ref.status}
              </S.StatusCapsule>
            </S.Ref>
          );
        })}
      </S.Content>
    </S.Container>
  );
};
