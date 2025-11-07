import { useEffect, useRef, useState } from "react";
import image1 from "../assets/images/img1.jpg";
import image2 from "../assets/images/img2.jpg";
import image3 from "../assets/images/img3.jpg";

const imageArray: { id: number; img: string }[] = [
  { id: 1, img: image1 },
  { id: 2, img: image2 },
  { id: 3, img: image3 },
];

export const ImageList = () => {
  const [images, setImages] = useState<{ id: number; img: string }[] | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);
  const [loadMs, setLoadMs] = useState<number | null>(null);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    // mark start time just before setting images
    startRef.current = performance.now();
    const fullImgList = Array.from({ length: 1500 }, (_, repeatIndex) =>
      imageArray.map((image) => ({
        ...image,
        id: repeatIndex * 1000 + image.id,
      }))
    ).flat();
    setImages(fullImgList);
  }, []);

  useEffect(() => {
    // when images have been set, compute elapsed and stop loading
    if (images && startRef.current !== null) {
      const end = performance.now();
      setLoadMs(Math.round(end - startRef.current));
      setIsLoading(false);
    }
  }, [images]);

  return (
    <div>
      {isLoading && <h3>Preparing images...</h3>}
      {!isLoading && loadMs !== null && (
        <h3>Prepared in {(loadMs / 1000).toFixed(3)}s</h3>
      )}

      <div className="imageList">
        {images?.map((image) => (
          <img key={`${image.id}`} src={image.img} alt={image.id.toString()} />
        ))}
      </div>
    </div>
  );
};
