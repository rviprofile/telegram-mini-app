import { VStack } from "@chakra-ui/react";
import { CarGallery } from "../components/CarGallery/CarGallery";
import { NavMenu } from "../components/NavMenu/NavMenu";
import CarDescription from "../components/CarDescription/CarDescription";
import { CarInfo } from "../components/CarInfo/CarInfo";

export const Car = () => {
  return (
    <VStack minH={"100dvh"} w={"100%"} gap={"16px"}>
      <CarGallery />
      <CarDescription />
      <CarInfo />
      <NavMenu />
    </VStack>
  );
};
