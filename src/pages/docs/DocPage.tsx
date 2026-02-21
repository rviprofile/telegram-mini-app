import { SkeletonText, Text, VStack } from "@chakra-ui/react";
import { NavMenu } from "../../components/NavMenu/NavMenu";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import type { DocDetail } from "../../api/types";
import API from "../../api";

export const DocPage = () => {
  const navigate = useNavigate();

  const { page } = useParams();

  const { data: doc, isLoading } = useQuery({
    queryKey: [`document/${page}`],
    queryFn: async (): Promise<DocDetail> => {
      return await API.get(`/document/${page}`);
    },
  });

  if (isLoading) {
    return <SkeletonText variant="shine" opacity={"0.3"} />;
  }

  return (
    <VStack
      minH={"calc(100dvh - 80px)"}
      w={"100%"}
      gap={"16px"}
      padding={"0 16px"}
    >
      <PageHeader title="Правила" onPrev={() => navigate("/docs")} />
      <Text
        textAlign="start"
        dangerouslySetInnerHTML={{ __html: doc?.text || "" }}
      />
      <NavMenu />
    </VStack>
  );
};
