import "./Hero.css";
import HeroPhoto from "./HeroPhoto.jpg";
import HeroPhoto2 from "./HeroPhoto2.jpg";
import HeroPhoto3 from "./HeroPhoto3.jpg";

import { useState, useEffect } from "react";

const Hero = ({ arrayImage }) => {
  // const arrayImage = [HeroPhoto, HeroPhoto2, HeroPhoto3];
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   setInterval(() => {
  //     onChangeImage();
  //   }, 5000);
  // });

  function onChangeImage() {
    // console.log("Cliquei no botão");
    // console.log(GalleryList);
    let newCount = count + 1;

    if (newCount >= arrayImage.length) {
      newCount = 0;
    }
    setCount(newCount);
    // console.log(newCount);
  }

  return (
    <div className="hero-background-color">
      {/* <div className="hero-text-photo">
        <h4 className="hero-text-style">VIVENDO NA EUROPA</h4>
        <h4 className="hero-text-style-2">por Adriana Gonzaga</h4>
      </div> */}

      <img
        key={count}
        className="hero-img"
        src={arrayImage[count]}
        onClick={onChangeImage}
      />
    </div>
  );
};

export default Hero;
