import ItineraryCard from "./ItineraryCard";
import Title from "./Title";
import Header from "./Header";
import "./ItinerariesLinks.css";

const ItineraryLinks = () => {
  return (
    <div>
      <Header className="itineraries-header" />
      <div className="itineraries-title">
        <Title name="Itineraries" />
      </div>
      <div className="itineraries-links">
        <ItineraryCard />
      </div>
    </div>
  );
};

export default ItineraryLinks;
