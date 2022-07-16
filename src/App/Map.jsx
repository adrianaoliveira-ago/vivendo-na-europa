import "./Map.css";
import { VectorMap } from "react-jvectormap";

function Map() {
  const arrayCountry = [
    { name: "England", flag: "🇬🇧" },
    { name: "Finland", flag: "🇫🇮" },
    { name: "France", flag: "🇫🇷" },
    { name: "Brazil", flag: "🇧🇷" },
    { name: "Romania", flag: "🇷🇴" },
    { name: "Germany", flag: "🇩🇪" },
    { name: "Portugal", flag: "🇵🇹" },
    { name: "Poland", flag: "🇵🇱" },
    { name: "Holland", flag: "🇳🇱" },
    { name: "Sweden", flag: "🇸🇪" },
    { name: "denmark", flag: "🇩🇰" },
    { name: "Hungary", flag: "🇭🇺" },
    { name: "Italy", flag: "🇮🇹" },
    { name: "Estonia", flag: "🇪🇪" },
    { name: "Spain", flag: "🇪🇸" },
    { name: "Qatar", flag: "🇶🇦" },
    { name: "Luxemburg", flag: "🇱🇺" },
    { name: "Greece", flag: "🇬🇷" },
    { name: "Belgium", flag: "🇧🇪" },
    { name: "Czech Republic", flag: "🇨🇿" },
  ];

  const mapData = {
    BR: 0,
    // CN: 0,
    // IN: 9900,
    // SA: 86,
    // EG: 70,
    // SE: 0,
    // FI: 0,
    // FR: 0,
    // US: 0,
  };

  return (
    <div className="map-container">
      <div className="map-country-list">
        <h2>Countries that I visited: {arrayCountry.length}</h2>
        <div className="map-flags">
          {arrayCountry.map((item) => {
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
                fill: "#e4e4e4",
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
                fill: "#e4e4e4", //color for the clicked country
              },
              selectedHover: {},
            }}
            // regionsSelectable={true}
            series={{
              regions: [
                {
                  values: mapData, //this is your data
                  scale: ["#146804", "#ff0000"], //your color game's here
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
