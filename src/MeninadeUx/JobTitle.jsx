import React from "react";
import "./JobTitle.css";

import mockup1 from "./mockup1.svg";
import mockup2 from "./mockup2.svg";
import mockup3 from "./mockup3.svg";

const JobTitle = () => {
  return (
    <div className="meninadeux-container-designs">
      <div className="body-title-job">
        <p>Um pouco do meu trabalho</p>
      </div>
      <div className="meninadeUX-job-designs">
        {/* <img src={divWave}></img> */}
        <img src={mockup1}></img>
        <img src={mockup2}></img>
        <img src={mockup3}></img>
      </div>
    </div>
  );
};

export default JobTitle;
