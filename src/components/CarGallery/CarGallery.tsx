import { HStack, Image, Skeleton } from "@chakra-ui/react";
import * as S from "./CarGallery.styles";
import { useState } from "react";
import { LargeViewGallery } from "../LargeViewGallery/LargeViewGallery";

const mokimages = [
  {
    image: "/images/kiario.jpg",
    id: 1,
  },
  {
    image: "/images/kiario.jpg",
    id: 2,
  },
  {
    image: "/images/kiario.jpg",
    id: 3,
  },
  {
    image: "/images/kiario.jpg",
    id: 4,
  },
];

export const CarGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [isLargeViewOpen, setIsLargeViewOpen] = useState<boolean>(false);
  const isLoading = false;
  return (
    <S.GalleryContainer>
      {isLargeViewOpen && (
        <LargeViewGallery
          onClose={() => setIsLargeViewOpen(false)}
          open={isLargeViewOpen}
          images={mokimages}
          currentIndex={selectedImage}
        />
      )}
      {!isLoading ? (
        <Image
          src={mokimages[selectedImage].image}
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
          mokimages.map((item, index) => (
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
