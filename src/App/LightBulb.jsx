import LightBulbOn from "./LightBulbOn.jpg";
import LightBulbOff from "./LightBulbOff.jpg";
import { useState } from "react";

function LightBulb() {
  const [isLightOn, setlight] = useState(true); // isLightOn state is a boolean (true or false)

  function onChangeLight() {
    console.log(isLightOn);
    if (isLightOn === true) {
      setlight(false);
    } else setlight(true);
  }

  return (
    <div>
      <img
        src={isLightOn ? LightBulbOn : LightBulbOff} // ternary operator => boolean ? if true : if false
        onClick={onChangeLight}
      />
    </div>
  );
}
export default LightBulb;
