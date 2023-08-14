import React from "react";
import "./Portfolio.css";
import PortfolioItem from "./PortfolioItem";

import mockup1 from "./assets/mockup1.svg";
import mockup2 from "./assets/mockup2.svg";
import mockup3 from "./assets/mockup3.svg";

const Portfolio = () => {
  return (
    <div className="meninadeux-portfolio-container">
      <div className="meninadeux-portfolio-title">
        <p>Um pouco do meu trabalho</p>
      </div>
      <div className="meninadeUX-portfolio-grid">
        <PortfolioItem
          image={mockup1}
          title="Quit Nic Design"
          description="Design construído para ajudar pessoas que estão no processo de desistência do cigarro."
        />
        <PortfolioItem
          image={mockup2}
          title="Wedding Preparation Design"
          description="Design contruído para organização de eventos de casamentos onde você tem o acompanhamento de todo o processo de planejamento inclusivo do balanço financeiro."
        />
        <PortfolioItem
          image={mockup3}
          title="Vivendo na Europa Blog"
          description="Design de blog pessoal com a finalidade de compartilhar viagens e dicas sobre viver fora do Brasil."
        />
      </div>
    </div>
  );
};

export default Portfolio;
