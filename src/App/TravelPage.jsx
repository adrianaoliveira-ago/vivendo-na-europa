import Header from "./Header";
import Footer from "./Footer";
import logoConstruction from "./animation.gif";
import logoConstruction2 from "./animation2.gif";
import "./TravelPage.css";
import Title from "./Title";
import { useState } from "react";

const TravelPage = () => {
  const arrayImage = [logoConstruction, logoConstruction2];
  const [count, setCount] = useState(0);

  function onChangeImage() {
    // console.log("Cliquei no botão");
    // console.log(GalleryList);
    let newCount = count + 1;

    if (newCount > 1) {
      newCount = 0;
    }
    setCount(newCount);
    // console.log(newCount);
  }
  return (
    <div>
      <Header></Header>

      <Title name="Ainda mortão"></Title>
      <div className="travel-page-content">
        <img
          src={arrayImage[count]}
          className="travel-page-imag"
          onClick={onChangeImage}
        />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default TravelPage;
