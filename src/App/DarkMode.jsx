import DarkModeOn from "./Icons/DarkModeOn.svg";
import DarkModeOff from "./Icons/DarkModeOff.svg";
import { useState } from "react";

function DarkMode() {
  const [darkModeisOn, setDarkMode] = useState(false);

  function onChangeDarkMode() {
    console.log(darkModeisOn);
    if (darkModeisOn === true) {
      setDarkMode(false);
    } else setDarkMode(true);
  }

  return (
    <div className="style-icon-dark-mode">
      <img
        src={darkModeisOn === true ? DarkModeOn : DarkModeOff} // ternary operator => boolean ? if true : if false
        onClick={onChangeDarkMode}
      />
    </div>
  );
}
export default DarkMode;
