import { VStack } from "@chakra-ui/react";
import { CarGallery } from "../components/CarGallery/CarGallery";
import { NavMenu } from "../components/NavMenu/NavMenu";
import CarDescription from "../components/CarDescription/CarDescription";
import { CarInfo } from "../components/CarInfo/CarInfo";
import { useQuery } from "@tanstack/react-query";
import API from "../api";
import type { CarDetail } from "../api/types";

export const Car = () => {
  const { data: cardetail } = useQuery({
    queryKey: ["car/detail"],
    queryFn: async (): Promise<CarDetail> => {
      return await API.get("/car/detail");
    },
  });
  if (!cardetail) {
    return null;
  }
  return (
    <VStack minH={"calc(100dvh - 60px)"} w={"100%"} gap={"16px"}>
      <CarGallery cardetail={cardetail} />
      <CarDescription description={cardetail.description} />
      <CarInfo cardetail={cardetail} />
      <NavMenu />
    </VStack>
  );
};
