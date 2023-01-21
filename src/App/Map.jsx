import "./Map.css";
import { VectorMap } from "react-jvectormap";
import { useEffect, useState } from "react";

function Map() {
  // const mapData = {
  //   BR: 0,
  //   FI: 0,
  //   FR: 0,
  //   DE: 0,
  //   PT: 0,
  //   CZ: 0,
  //   PL: 0,
  //   NL: 0,
  //   SE: 0,
  //   DK: 0,
  //   HU: 0,
  //   IT: 0,
  //   EE: 0,
  //   ES: 0,
  //   GB: 0,
  //   QA: 0,
  //   BE: 0,
  //   LU: 0,
  //   RO: 0,
  //   GR: 0,
  //   MA: 0,
  // };

  const fetchUrl =
    "https://cdn.contentful.com/spaces/6m6n676gq222/environments/master/entries?access_token=pzHjF6PJP8oDSJGbJtG4Z0ntu66Q5FoOoQq3NuyUqbQ&content_type=countriesVisited";

  const [flagList, setFlagtList] = useState([]);

  const fetchData = async () => {
    console.log("fetching Data");
    const response = await fetch(fetchUrl);
    const responseJson = await response.json();

    console.log(responseJson.items);

    const newArray = responseJson.items.map((item) => {
      return {
        flag: item.fields.flag,
        code: item.fields.code,
        date: item.fields.date,
        name: item.fields.name,
      };
    });
    console.log("flags array", newArray);
    setFlagtList(newArray);
  };

  useEffect(() => {
    console.log("component loaded");
    fetchData();
  }, []);

  const generateMapData = () => {
    console.log("generateMapData");

    const mapData = {};

    flagList.forEach((item) => {
      mapData[item.code] = 0; // mapData.BR = 0
    });

    console.log(mapData);

    return mapData;
  };

  const getFillColor = () => {
    return "#e4e4e4";
  };

  return (
    <div className="map-container">
      <div className="map-country-list">
        <h2>Countries that I visited: {flagList.length}</h2>
        <div className="map-flags">
          {flagList.map((item) => {
            return item.flag;
          })}
        </div>

        <div>
          <VectorMap
            map={"world_mill"}
            backgroundColor="transparent" //change it to ocean blue: #0077be
            zoomOnScroll={false}
            containerStyle={{
              width: "100%",
              height: "520px",
            }}
            // onRegionClick={handleClick} //gets the country code
            containerClassName="map"
            regionStyle={{
              initial: {
                fill: getFillColor(),
                "fill-opacity": 0.9,
                stroke: "none",
                "stroke-width": 0,
                "stroke-opacity": 0,
              },
              hover: {
                "fill-opacity": 0.8,
                cursor: "pointer",
              },
              selected: {
                fill: getFillColor(), //color for the clicked country
              },
              selectedHover: {},
            }}
            // regionsSelectable={true}
            series={{
              regions: [
                {
                  values: generateMapData(), //this is your data
                  scale: ["#ED66B3"], //your color game's here
                  normalizeFunction: "polynomial",
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Map;
