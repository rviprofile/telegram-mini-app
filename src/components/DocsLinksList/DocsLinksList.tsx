import { Image, VStack } from "@chakra-ui/react";
import * as S from "./DocsLinksList.styles";

export const DocsLinksList = () => {
  return (
    <VStack gap={0} minH={"100%"}>
      <S.DocLink>
        Правила акции <Image src={`/icons/chevron-left.svg`} />
      </S.DocLink>
      <S.DocLink>
        Организатор и реквезиты ООО <Image src={`/icons/chevron-left.svg`} />
      </S.DocLink>
      <S.DocLink>
        Политика обработки данных <Image src={`/icons/chevron-left.svg`} />
      </S.DocLink>
      <S.DocLink>
        Как определяется победитель <Image src={`/icons/chevron-left.svg`} />
      </S.DocLink>
      <S.DocLink>
        Порядок получения приза
        <Image src={`/icons/chevron-left.svg`} />
      </S.DocLink>
    </VStack>
  );
};
