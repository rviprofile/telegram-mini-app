import { Button, VStack } from "@chakra-ui/react";
import { NavMenu } from "../components/NavMenu/NavMenu";
import { PageHeader } from "../components/PageHeader/PageHeader";
import { DocsLinksList } from "../components/DocsLinksList/DocsLinksList";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import type { DocsList } from "../api/types";
import API from "../api";

export const Docs = () => {
  const navigate = useNavigate();

  const { data: docsList, isLoading } = useQuery({
    queryKey: ["document/list"],
    queryFn: async (): Promise<DocsList> => {
      return await API.get("/document/list");
    },
  });

  return (
    <VStack
      minH={"calc(100dvh - 70px)"}
      w={"100%"}
      gap={"16px"}
      padding={"0 16px"}
    >
      <PageHeader title="ДОКУМЕНТЫ" onPrev={() => navigate(-1)} />
      <DocsLinksList docsList={docsList} isLoading={isLoading} />
      <Button
        style={{
          background: "transparent",
          borderRadius: "8px",
          border: "2px solid #7581AB",
          fontSize: "14px",
          width: "100%",
          color: "white",
          height: "42px",
          marginTop: "auto",
        }}
      >
        Поддержка
      </Button>
      <NavMenu />
    </VStack>
  );
};
