import { HStack, Image, Skeleton } from "@chakra-ui/react";
import * as S from "./CarGallery.styles";
import { useState } from "react";

export const CarGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(
    "/images/kiario.jpg"
  );
  const isLoading = false;
  return (
    <S.GalleryContainer>
      {selectedImage ? (
        <Image src={selectedImage} />
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
          Array.from({ length: 10 }).map((_, index) => (
            <Image
              key={index}
              src="/images/kiario.jpg"
              height="58px"
              width="58px"
              borderRadius={"8px"}
            />
          ))
        )}
      </HStack>
    </S.GalleryContainer>
  );
};
