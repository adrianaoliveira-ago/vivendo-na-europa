import "./Map.css";

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

  return (
    <div className="map-container">
      <div className="map-country-list">
        <h2>Countries that I visited: {arrayCountry.length}</h2>
        <div className="map-flags">
          {arrayCountry.map((item) => {
            return item.flag;
          })}
        </div>
        <iframe
          className="map-embed"
          src="https://www.google.com/maps/d/u/0/embed?mid=1kXPgMufDlvZrBcHGBfX6dQ8tl3ISExTi&ehbc=2E312F"
          width="800"
          height="400"
        ></iframe>
      </div>
    </div>
  );
}

export default Map;
