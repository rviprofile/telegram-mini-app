import { Image, SkeletonText, VStack } from "@chakra-ui/react";
import * as S from "./DocsLinksList.styles";
import type { DocsList } from "../../api/types";

export const DocsLinksList = ({
  docsList,
  isLoading,
}: {
  docsList: DocsList | undefined;
  isLoading: boolean;
}) => {
  if (isLoading) {
    return <SkeletonText variant="shine" opacity={"0.3"}/>;
  }
  return (
    <VStack gap={0} minH={"100%"}>
      {docsList?.map((doc) => {
        return (
          <S.DocLink to={`/docs/${doc.code}`}>
            {doc.title}
            <Image src="/icons/chevron-left.svg" />
          </S.DocLink>
        );
      })}
    </VStack>
  );
};
