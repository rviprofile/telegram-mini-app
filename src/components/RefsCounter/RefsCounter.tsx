import { HStack, Skeleton, Slider } from "@chakra-ui/react";
import * as S from "./RefsCounter.styles";
import type { ReferalStats } from "../../api/types";

export const RefsCounter = ({
  stats,
  isLoading,
}: {
  stats?: ReferalStats;
  isLoading: boolean;
}) => {
  if (isLoading) {
    return (
      <Skeleton
        width={"100%"}
        height={"91px"}
        borderRadius={"16px"}
        variant="shine"
        opacity={"0.3"}
      />
    );
  }
  if (!stats) {
    return null;
  }
  return (
    <S.CardContainer>
      <Slider.Root value={[stats?.userCount]} max={stats?.targetToNext}>
        <HStack>
          <p className="segment">Защитано:</p>
          <p className="value">
            {stats?.userCount?.toLocaleString("ru-RU")} /{" "}
            {stats?.targetToNext?.toLocaleString("ru-RU")}
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
        <p className="value">
          {stats.referalTicketCount.toLocaleString("ru-RU")}
        </p>
      </HStack>
    </S.CardContainer>
  );
};
