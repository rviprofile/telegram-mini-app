import { Button, VStack } from "@chakra-ui/react";
import { NavMenu } from "../components/NavMenu/NavMenu";
import { PageHeader } from "../components/PageHeader/PageHeader";
import { DocsLinksList } from "../components/DocsLinksList/DocsLinksList";

export const Docs = () => {
  return (
    <VStack
      minH={"calc(100dvh - 70px)"}
      w={"100%"}
      gap={"16px"}
      padding={"0 16px"}
    >
      <PageHeader title="ДОКУМЕНТЫ" onPrev={() => {}} />
      <DocsLinksList />
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
