import { Image, VStack } from "@chakra-ui/react";
import * as S from "./DocsLinksList.styles";

export const DocsLinksList = () => {
  return (
    <VStack gap={0} minH={"100%"}>
      <S.DocLink to="/docs/rules">
        Правила акции <Image src="/icons/chevron-left.svg" />
      </S.DocLink>

      <S.DocLink to="/docs/organizer-details">
        Организатор и реквизиты ООО <Image src="/icons/chevron-left.svg" />
      </S.DocLink>

      <S.DocLink to="/docs/data-processing-policy">
        Политика обработки данных <Image src="/icons/chevron-left.svg" />
      </S.DocLink>

      <S.DocLink to="/docs/winner-selection">
        Как определяется победитель <Image src="/icons/chevron-left.svg" />
      </S.DocLink>

      <S.DocLink to="/docs/prize-receiving-procedure">
        Порядок получения приза
        <Image src="/icons/chevron-left.svg" />
      </S.DocLink>
    </VStack>
  );
};
