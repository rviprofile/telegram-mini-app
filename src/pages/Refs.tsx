import { VStack } from "@chakra-ui/react";
import { NavMenu } from "../components/NavMenu/NavMenu";
import { PageHeader } from "../components/PageHeader/PageHeader";
import { useNavigate } from "react-router-dom";
import { RefInputCard } from "../components/RefInputCard/RefInputCard";
import { RefsCounter } from "../components/RefsCounter/RefsCounter";
import { RefsListCard } from "../components/RefsListCard/RefsListCard";
import { useQuery } from "@tanstack/react-query";
import API from "../api";
import type { ReferalList, ReferalStats, User } from "../api/types";

export const Refs = () => {
  const navigate = useNavigate();
  const { data: user, isLoading: isUserLoading } = useQuery({
    queryKey: ["user"],
    queryFn: async (): Promise<User> => {
      return await API.get("/user");
    },
  });
  const { data: stats, isLoading: isStatsLoading } = useQuery({
    queryKey: ["/ticket/stats/referal"],
    queryFn: async (): Promise<ReferalStats> => {
      return await API.get("/ticket/stats/referal");
    },
  });
  const { data: refs, isLoading: isRefsLoading } = useQuery({
    queryKey: ["/user/referals"],
    queryFn: async (): Promise<ReferalList> => {
      return await API.get("/user/referals");
    },
  });
  return (
    <VStack minH={"calc(100dvh - 84px)"} w={"100%"} gap={"16px"}>
      <PageHeader title="Рефералы" onPrev={() => navigate("/")} />
      <VStack w={"100%"} padding={"0 16px"}>
        <RefInputCard user={user} isLoading={isUserLoading} />
        <RefsCounter isLoading={isStatsLoading} stats={stats} />
        <RefsListCard
          stats={stats}
          isLoading={isStatsLoading || isRefsLoading}
          refs={refs}
        />
      </VStack>
      <NavMenu />
    </VStack>
  );
};
