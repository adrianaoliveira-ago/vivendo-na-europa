import AboutMeImg from "./AboutMe.jpg";
import "./AboutMe.css";
import { useState } from "react";

function AboutMe() {
  // const [estaAberto, mudarValorPara] = useState(true);

  // const titleOnClick = () => {
  //   console.log(estaAberto);

  //   if (estaAberto === false) {
  //     mudarValorPara(true);
  //   }

  //   if (estaAberto === true) {
  //     mudarValorPara(false);
  //   }
  // };

  return (
    <div className="aboutme-container">
      <img src={AboutMeImg} className="aboutme-img" />
      <div className="aboutme-text">
        <h2>About Me </h2>

        <p>
          Hey, I'm Adriana. At the moment I'm living in Berlin/Germany. I would
          like to share with you my experience traveling throughout the world.
          <br />
          That means tips, not only of life in Germany but also in other
          countries. Welcome to my page, I hope that it helps you to find
          something good for your life and travel.
          <br />
          <br />
          Enjoy 🙃
        </p>
        {/* // )} */}
      </div>
    </div>
  );
}
export default AboutMe;
