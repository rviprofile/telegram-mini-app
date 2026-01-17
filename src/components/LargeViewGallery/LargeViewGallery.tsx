import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { PhotoSlider } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import "./LargeViewGallery.css";
import "./LargeViewGallery.scss";

export type TypeImages = {
  image: string;
  id: number;
};

export const LargeViewGallery = ({
  open,
  onClose,
  images,
  currentIndex,
}: {
  open: boolean;
  onClose: () => void;
  images: TypeImages[];
  currentIndex: number;
}) => {
  const [index, setIndex] = useState<number>(currentIndex);
  const [isViewerOpen, setViewerOpen] = useState(true);

  useEffect(() => {
    if (open) {
      setViewerOpen(true);
      setIndex(currentIndex);
    }
  }, [open, currentIndex]);

  const slides = images.map((item) => ({
    src: item.image,
    key: item.id,
  }));

  if (!open) return null;

  return (
    <div className="gallery-container">
      <Carousel
        indicators={false}
        activeIndex={index}
        interval={null}
        onSelect={(selectedIndex) => setIndex(selectedIndex)}
        touch
      >
        {images.map((item) => (
          <Carousel.Item key={item.id} />
        ))}
      </Carousel>

      {/* 🔽 Кастомные индикаторы */}
      <div className="gallery-thumbnails">
        {images.map((img, i) => (
          <button
            key={img.id}
            className={`thumbnail ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          >
            <img src={img.image} alt="" />
          </button>
        ))}
      </div>

      <PhotoSlider
        images={slides}
        visible={isViewerOpen}
        onClose={() => {
          setViewerOpen(false);
          onClose();
        }}
        index={index}
        onIndexChange={setIndex}
        maskOpacity={0.001}
        bannerVisible={false}
        maskClosable={false}
      />
    </div>
  );
};
