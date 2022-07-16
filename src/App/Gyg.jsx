import ArrowLeft from "./Icons/arrow-left.svg";
import ArrowRight from "./Icons/arrow-right.svg";
import TourJson from "./gyg.json";
import { useState } from "react";
import "./Gyg.css";

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

    if (newCount > 1) {
      newCount = 0;
    }

    setCount(newCount);
    setSelectedTour(TourJson.tour[newCount]);
  }

  return (
    <div>
      <h2 className="Gyg-title">My favorite Tours</h2>
      <div className="Gyg-container-arrow">
        <div className="Gyg-gallery-arrow">
          <img
            src={ArrowLeft}
            // className="gallery-arrowleft"
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
            src={ArrowRight}
            // className="gallery-arrowright"
            onClick={onArrowRightClick}
          />
        </div>
      </div>
    </div>
  );
}
export default Gyg;
