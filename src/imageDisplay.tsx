import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

interface ImageProps {
  images: string[];
  text: string[];
}

const ImageDisplay: React.FC<ImageProps> = ({ images, text }) => {
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
  });

  const tableData = text.length === 12 ? text : new Array(9).fill('');


  return (
    <div className="image-display">
      <div className="image-text">
        <table>
          <tbody>
            {Array.from({ length: 4 }, (_, rowIndex) => (
              <tr key={rowIndex}>
                {Array.from({ length: 3 }, (_, colIndex) => (
                  <td key={colIndex}>{tableData[rowIndex * 3 + colIndex]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="carousel-container" {...handlers}>
        <div className="image-wrapper">
          <button onClick={prevImage} className="carousel-button left-button">❮</button>
          <img src={images[index]} alt="carousel" className="carousel-image" />
          <button onClick={nextImage} className="carousel-button right-button">❯</button>
        </div>
      </div>
    </div>
  );
};


export default ImageDisplay;