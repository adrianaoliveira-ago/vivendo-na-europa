import DarkModeOn from "./Icons/DarkModeOn.svg";
import DarkModeOff from "./Icons/DarkModeOff.svg";
import { useState } from "react";

function DarkMode() {
  const [darkModeisOn, setDarkMode] = useState(false);
  const [modeName, setModeName] = useState("Dark");

  function onChangeDarkMode() {
    console.log(darkModeisOn);

    const element = document.getElementsByTagName("BODY")[0];

    if (darkModeisOn === true) {
      setDarkMode(false);
      setModeName("Dark");
      // if dark mode is on, remove dark-mode class from body
      element.classList.remove("dark-mode");
    } else {
      setDarkMode(true);
      setModeName("Light");
      //  else add dark-mode class to body
      element.classList.add("dark-mode");
    }
  }

  return (
    // <div className="style-icon-dark-mode">
    //   <img
    //     src={darkModeisOn === true ? DarkModeOn : DarkModeOff} // ternary operator => boolean ? if true : if false
    //     onClick={onChangeDarkMode}
    //   />
    //   <div className="dark-mode-name">{modeName}</div>
    // </div>
    <div class="toggleWrapper">
      <input type="checkbox" class="dn" id="dn" onClick={onChangeDarkMode} />
      <label for="dn" class="toggle">
        <span class="toggle__handler">
          <span class="crater crater--1"></span>
          <span class="crater crater--2"></span>
          <span class="crater crater--3"></span>
        </span>
        <span class="star star--1"></span>
        <span class="star star--2"></span>
        <span class="star star--3"></span>
        <span class="star star--4"></span>
        <span class="star star--5"></span>
        <span class="star star--6"></span>
      </label>
    </div>
  );
}
export default DarkMode;
