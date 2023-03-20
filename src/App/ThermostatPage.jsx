import "./ThermostatPage.css";
import { useState } from "react";

const ThermostatPage = () => {
  const [counter, setCounter] = useState(0);

  function counterUp() {
    const newCounter = counter + 1;
    setCounter(newCounter);
    console.log("up");
  }

  function counterDown() {
    const newCounter = counter - 1;
    setCounter(newCounter);
    console.log("down");
  }

  return (
    <div>
      <div className="Thermostat-Color-Page">
        <div className="Thermostat-Color-Name"> Current Temp </div>

        <div className="Thermostat-temperature">{counter}</div>
      </div>

      <div className="Thermostat-Arrow">
        <div className="Thermostat-Arrow-Up" onClick={counterUp}></div>

        <div className="Thermostat-Arrow-Down" onClick={counterDown}></div>
      </div>
    </div>
  );
};

export default ThermostatPage;
