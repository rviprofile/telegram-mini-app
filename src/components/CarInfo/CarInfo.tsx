import { Image, VStack } from "@chakra-ui/react";
import * as S from "./CarInfo.styles";

export const CarInfo = () => {
  return (
    <S.Container>
      {Array.from({ length: 9 }).map((_) => {
        return (
          <S.InfoItem>
            <Image src={"/icons/car/car.svg"} width={"20px"} height={"20px"} />
            <VStack align={"flex-start"}>
              <p className="title">Заголовок:</p>
              <p className="value">Значение</p>
            </VStack>
          </S.InfoItem>
        );
      })}
    </S.Container>
  );
};
