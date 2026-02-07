import { HStack, Image, Skeleton } from "@chakra-ui/react";
import * as S from "./CarGallery.styles";
import { useState } from "react";
import { LargeViewGallery } from "../LargeViewGallery/LargeViewGallery";
import type { CarDetail } from "../../api/types";

export const CarGallery = ({ cardetail }: { cardetail: CarDetail }) => {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [isLargeViewOpen, setIsLargeViewOpen] = useState<boolean>(false);
  const isLoading = false;
  const galleryarray = cardetail.images.map((image: string, index: number) => {
    return {
      image,
      id: index,
    };
  });
  return (
    <S.GalleryContainer>
      {isLargeViewOpen && (
        <LargeViewGallery
          onClose={() => setIsLargeViewOpen(false)}
          open={isLargeViewOpen}
          images={galleryarray}
          currentIndex={selectedImage}
        />
      )}
      {!isLoading ? (
        <Image
          src={galleryarray[selectedImage].image}
          onClick={() => setIsLargeViewOpen(true)}
        />
      ) : (
        <Skeleton width={"100%"} height={"251px"} borderRadius={0} />
      )}
      <HStack className="images_row" paddingLeft={"12px"} overflowX={"scroll"}>
        {isLoading ? (
          <>
            <Skeleton width={"58px"} height={"58px"} />
            <Skeleton width={"58px"} height={"58px"} />
            <Skeleton width={"58px"} height={"58px"} />
            <Skeleton width={"58px"} height={"58px"} />
            <Skeleton width={"58px"} height={"58px"} />
            <Skeleton width={"58px"} height={"58px"} />
            <Skeleton width={"58px"} height={"58px"} />
            <Skeleton width={"58px"} height={"58px"} />
            <Skeleton width={"58px"} height={"58px"} />
          </>
        ) : (
          galleryarray.map((item, index) => (
            <Image
              key={index}
              src={item.image}
              height="58px"
              width="58px"
              borderRadius={"8px"}
              className={selectedImage === index ? "selected" : ""}
              onClick={() => {
                setSelectedImage(index);
              }}
            />
          ))
        )}
      </HStack>
    </S.GalleryContainer>
  );
};
