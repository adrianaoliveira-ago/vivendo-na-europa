import DarkModeOn from "./Icons/DarkModeOn.svg";
import DarkModeOff from "./Icons/DarkModeOff.svg";
import { useState } from "react";

function DarkMode() {
  const [darkModeisOn, setDarkMode] = useState(false);

  function onChangeDarkMode() {
    console.log(darkModeisOn);

    const element = document.getElementsByTagName("BODY")[0];

    if (darkModeisOn === true) {
      setDarkMode(false);
      // if dark mode is on, remove dark-mode class from body
      element.classList.remove("dark-mode");
    } else {
      setDarkMode(true);
      //  else add dark-mode class to body
      element.classList.add("dark-mode");
    }
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
