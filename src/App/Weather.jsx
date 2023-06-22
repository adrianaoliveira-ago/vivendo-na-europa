import React from "react";
import { useEffect, useState } from "react";
import "./Weather.css";

import IconWeather1 from "./Icons/IconWeather1.png";

const Weather = () => {
  const fetchUrl =
    "http://api.weatherapi.com/v1/forecast.json?key=5a46020b78114e09a36164610231901&q=Berlin&days=0&aqi=no&alerts=no";

  const [currentTemp, setCurrentTemp] = useState("");
  const [localData, setLocalData] = useState("");
  const [conditionIcon, setConditionIcon] = useState("");

  const fetchData = async () => {
    console.log("fetching Data");
    const response = await fetch(fetchUrl);
    const responseJson = await response.json();

    console.log(responseJson.current.temp_c);
    const newTemp = responseJson.current.temp_c;
    setCurrentTemp(newTemp);

    const newIcon = responseJson.current.condition.icon;
    setConditionIcon(newIcon);

    const newLocalData = responseJson.location.localtime;

    const dateString = newLocalData;
    const date = new Date(dateString);

    const month = date.toLocaleString("default", { month: "short" });
    const day = date.getDate();
    const hour = date.getHours();
    const min = date.getMinutes();

    const formattedDate = `${month} ${day} ${hour}:${min}`;

    setLocalData(formattedDate);
  };

  useEffect(() => {
    console.log("component loaded");
    fetchData();
  }, []);

  return (
    <div className="weather">
      <div className="weather-div">
        <div>
          <h4 className="weather-city-name">Berlin, Germany</h4>
          <h3 className="weather-month">{localData}</h3>

          <h1 className="weather-temperature">{currentTemp} °C</h1>
        </div>
        <div>
          <img src={conditionIcon} className="weather-icon" />
        </div>
      </div>
    </div>
  );
};

export default Weather;
