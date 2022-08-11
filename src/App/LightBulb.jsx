import LightBulbOn from "./LightBulbOn.jpg";
import LightBulbOff from "./LightBulbOff.jpg";
import { useState } from "react";

function LightBulb() {
  const arrayImage = [LightBulbOn, LightBulbOff];
  const [light, setLight] = useState(0);

  function onChangeLight() {
    console.log("Cliquei no botão");
    // console.log(GalleryList);
    let LightBulbOff = light + 1;

    if (LightBulbOff > 1) {
      LightBulbOff = 0;
    }

    setLight(LightBulbOff);

    // console.log(LightBulbOff);
    // setSelectedImage(GalleryList.photos[newCount]);
  }

  return (
    <div>
      <img
        src={arrayImage[light]}
        //   className="content-image"
        onClick={onChangeLight}
      />
    </div>
  );
}
export default LightBulb;
