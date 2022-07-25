import "./styles.css";

import ArrowLeft from "../Icons/arrow-left.svg";
import ArrowRight from "../Icons/arrow-right.svg";

import { useState } from "react";

function Gallery({ list, title }) {
  const [selectedImage, setSelectedImage] = useState(list[0]);
  const [count, setCount] = useState(0);

  function onArrowLeftClick() {
    console.log("Cliquei no botão");
    console.log(list);
    let newCount = count - 1;

    if (newCount < 0) {
      newCount = list.length - 1; // size of the array => list.length
    }

    setCount(newCount);
    console.log(newCount);
    setSelectedImage(list[newCount]);
  }

  function onArrowRightClick() {
    console.log("Cliquei no botão direito");
    let newCount = count + 1;

    if (newCount > list.length - 1) {
      // size of the array => list.length
      newCount = 0;
    }

    setCount(newCount);
    console.log(newCount);
    setSelectedImage(list[newCount]);
  }

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">{title}</h2>

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
