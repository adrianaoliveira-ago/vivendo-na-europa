import coffeeImg from "./Footer/coffee-image.png";
import Imageok from "./Footer/image-ok.png";
import { useState } from "react";
import "./Footer.css";
import ArrowUp from "./Icons/ArrowUp.png";

function Footer() {
  const arrayImage = [coffeeImg, Imageok];
  const [count, setCount] = useState(0);

  function onChangeImage() {
    console.log("Cliquei no botão");
    // console.log(GalleryList);
    let newCount = count + 1;

    if (newCount > 1) {
      newCount = 0;
    }

    setCount(newCount);

    console.log(newCount);
    // setSelectedImage(GalleryList.photos[newCount]);
  }

  const today = new Date();
  const year = today.getFullYear();

  function scrollToTop() {
    // Scroll to top logic
    const rootElement = document.documentElement;
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer id="page-footer">
      <small className="footer-text">{year} Vivendo na Europa</small>
      <img
        src={arrayImage[count]}
        className="content-image"
        onClick={onChangeImage}
      />
      <img className="arrowup-style" src={ArrowUp} onClick={scrollToTop} />
    </footer>
  );
}

export default Footer;
