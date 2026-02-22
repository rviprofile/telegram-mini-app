import { HStack, Image, VStack } from "@chakra-ui/react";
import * as S from "./StaticstepMap.styles";

export const StaticStepMap = () => {
  return (
    <HStack marginTop={"30px"}>
      <VStack width={"130px"} position={"relative"}>
        <S.MapPoint active={true}>
          {" "}
          <Image src="icons/tickets/check.svg" width="25px" />
        </S.MapPoint>
        <S.PointLabel textAlign="center">
          Приём <br /> билетов
        </S.PointLabel>
        <S.ArrowIcon
          gridColumn="2"
          src="icons/tickets/arrow_gray.svg"
          width="54px"
          height="10px"
          className="arrow"
        />
      </VStack>
      <VStack width={"130px"} position={"relative"}>
        <S.MapPoint active={false}>
          <Image src="icons/tickets/list.svg" width="25px" />
        </S.MapPoint>
        <S.PointLabel textAlign="center">
          Срез <br /> списка
        </S.PointLabel>
        <S.ArrowIcon
          gridColumn="4"
          src="icons/tickets/arrow_gray.svg"
          width="54px"
          height="10px"
          className="arrow"
        />
      </VStack>{" "}
      <VStack width={"130px"}>
        <S.MapPoint active={false}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <path
                d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.21 13.8928L7 23.0028L12 20.0028L17 23.0028L15.79 13.8828"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </S.MapPoint>
        <S.PointLabel textAlign="center">
          Определение <br /> победителя
        </S.PointLabel>
      </VStack>
    </HStack>
  );
};
