import "./styles.css";
// import GalleryPhoto1 from "./photo1.jpg";
import ArrowLeft from "../Icons/arrow-left.svg";
import ArrowRight from "../Icons/arrow-right.svg";
import GalleryList from "./gallery.json";
import { useState } from "react";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(GalleryList.photos[0]);
  const [count, setCount] = useState(0);

  function onArrowLeftClick() {
    console.log("Cliquei no botão");
    console.log(GalleryList);
    let newCount = count - 1;

    if (newCount < 0) {
      newCount = 4;
    }

    setCount(newCount);
    console.log(newCount);
    setSelectedImage(GalleryList.photos[newCount]);
  }
  function onArrowRightClick() {
    console.log("Cliquei no botão direito");
    let newCount = count + 1;

    if (newCount > 4) {
      newCount = 0;
    }

    setCount(newCount);
    console.log(newCount);
    setSelectedImage(GalleryList.photos[newCount]);
  }

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Gallery</h2>

      <div className="gallery-photo-arrow">
        <img
          src={ArrowLeft}
          className="gallery-arrowleft"
          onClick={onArrowLeftClick}
        />
        <div className="gallerry-photo-legend">
          <img
            src={selectedImage.src}
            className="gallery-photo1"
            key={selectedImage.src}
          />
          <p>
            <strong>{selectedImage.year}</strong> - {selectedImage.description}
          </p>
        </div>
        <img
          src={ArrowRight}
          className="gallery-arrowright"
          onClick={onArrowRightClick}
        />
      </div>
    </div>
  );
}

export default Gallery;
