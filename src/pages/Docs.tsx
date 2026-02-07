import { Button, Text, VStack } from "@chakra-ui/react";
import { NavMenu } from "../components/NavMenu/NavMenu";
import { PageHeader } from "../components/PageHeader/PageHeader";
import { DocsLinksList } from "../components/DocsLinksList/DocsLinksList";

export const Docs = () => {
  return (
    <VStack
      minH={"calc(100dvh - 60px)"}
      w={"100%"}
      gap={"16px"}
      padding={"0 16px"}
    >
      <PageHeader title="ДОКУМЕНТЫ" onPrev={() => {}} />
      <DocsLinksList />
      <VStack gap={"14px"} w={"100%"} margin={"auto  16px 74px 16px"}>
        <Text fontSize={"14px"} fontWeight={"400"} fontFamily={"Inter"}>
          Организатор: ООО “Восход Авто”
        </Text>
        <Button
          style={{
            background: "transparent",
            borderRadius: "8px",
            border: "2px solid #7581AB",
            fontSize: "14px",
            width: "100%",
            color: "white",
            height: "42px",
          }}
        >
          Поддержка
        </Button>
      </VStack>
      <NavMenu />
    </VStack>
  );
};
