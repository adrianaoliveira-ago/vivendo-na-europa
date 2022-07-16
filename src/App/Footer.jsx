import coffeeImg from "./Footer/coffee-image.png";
import Imageok from "./Footer/image-ok.png";
import { useState } from "react";
import "./Footer.css";

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

  return (
    <footer id="page-footer">
      <small className="footer-text">{year} Vivendo na Europa</small>
      <img
        src={arrayImage[count]}
        className="content-image"
        onClick={onChangeImage}
      />
    </footer>
  );
}

export default Footer;
