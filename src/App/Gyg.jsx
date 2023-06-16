import ArrowLeft from "./Icons/arrow-left.svg";
import ArrowRight from "./Icons/arrow-right.svg";
import TourJson from "./gyg.json";
import { useState } from "react";
import "./Gyg.css";
import Title from "./Title";

function Gyg() {
  const [selectedTour, setSelectedTour] = useState(TourJson.tour[0]);
  const [count, setCount] = useState(0);

  function onArrowLeftClick() {
    let newCount = count - 1;
    console.log("Cliquei no botão", newCount);

    if (newCount < 0) {
      newCount = 1;
    }

    setCount(newCount);

    setSelectedTour(TourJson.tour[newCount]);
  }

  function onArrowRightClick() {
    let newCount = count + 1;
    console.log("Cliquei no botão direito", newCount);

    if (newCount > 2) {
      newCount = 0;
    }

    setCount(newCount);
    setSelectedTour(TourJson.tour[newCount]);
  }

  return (
    <div>
      <Title name="My Favorite Tours" />

      <div className="Gyg-container-arrow">
        <div className="Gyg-gallery-arrow">
          <img
            className="arrow-left"
            src={ArrowLeft}
            onClick={onArrowLeftClick}
          />
        </div>

        <div className="Gyg-container">
          <div
            className="Gyg-tour"
            style={{ height: "100px", width: "300px" }}
            data-gyg-href="https://widget.getyourguide.com/default/activities.frame"
            data-gyg-locale-code="en-US"
            data-gyg-widget="activities"
            data-gyg-number-of-items="1"
            data-gyg-partner-id="3K1OV70"
            data-gyg-placement="content-middle"
            data-gyg-tour-ids={selectedTour.tourId}
            key={selectedTour.tourId}
          ></div>

          <div className="Gyg-opinion">
            <p className="Gyg-rating">
              <strong>My rating</strong> {selectedTour.myRating}
            </p>
            <p className="Gyg-style-text">{selectedTour.review}</p>
            <p className="Gyg-year-rating">
              <strong>{selectedTour.date}</strong>
            </p>
          </div>
        </div>
        <div>
          <img
            className="arrow-right"
            src={ArrowRight}
            onClick={onArrowRightClick}
          />
        </div>
      </div>
    </div>
  );
}
export default Gyg;
