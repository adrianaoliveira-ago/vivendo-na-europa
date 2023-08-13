import "./PortfolioItem.css";

import ArrowDownIcon from "./ArrowDownIcon.png";
import { useState } from "react";

const PortfolioItem = ({ image, title, description }) => {
  const [isVisible, setIsVisible] = useState(false);

  const onArrowClick = () => {
    if (isVisible === true) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  return (
    <div className="meninadeux-portfolioitem-container">
      <img src={image}></img>
      <div className="meninadeux-portfolioitem-arrow">
        <h4 className="meninadeux-portfolioitem-title">{title}</h4>
        <img
          src={ArrowDownIcon}
          className={
            isVisible === true
              ? "meninadeux-portifolio-arrow-up"
              : "meninadeux-portifolio-arrow-down"
          }
          onClick={onArrowClick}
        />
      </div>
      {isVisible && (
        <span className="meninadeux-portfolioitem-description">
          {description}
        </span>
      )}
    </div>
  );
};

export default PortfolioItem;
