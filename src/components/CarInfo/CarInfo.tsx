import { Image, VStack } from "@chakra-ui/react";
import * as S from "./CarInfo.styles";
import type { CarDetail } from "../../api/types";

export const CarInfo = ({ cardetail }: { cardetail: CarDetail }) => {
  return (
    <S.Container>
      {cardetail.props.map((prop) => {
        return (
          <S.InfoItem>
            <Image src={prop.ico} width={"20px"} height={"20px"} />
            <VStack align={"flex-start"}>
              <p className="title">{prop.name}</p>
              <p className="value">{prop.value}</p>
            </VStack>
          </S.InfoItem>
        );
      })}
    </S.Container>
  );
};
