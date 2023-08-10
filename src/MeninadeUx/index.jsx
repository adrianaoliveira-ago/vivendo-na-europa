import "./index.css";

import headerWave from "./headerWave.svg";
import footerWave from "./footerWave.svg";
import photo2 from "./photo2.svg";
import photoHeader from "./photoHeader.svg";

const MeninadeUX = () => {
  return (
    <>
      <div className="header">
        <div className="header-about-me">
          <h1>About me</h1>
        </div>
        <div className="header-div-photo">
          <img src={photoHeader} className="header-photo"></img>
        </div>
      </div>

      <div>
        <img src={headerWave} className="header-wave"></img>
      </div>
      <div className="body">
        <img src={photo2} className="body-photo"></img>
        <p className="body-text">
          "Optei por me inscrever para o voluntariado movida por uma visão maior
          de promover inclusão e igualdade, especialmente dentro das áreas de
          design e tecnologia da informação (TI). Ao observar o progresso e o
          impacto positivo que mulheres têm trazido para esses campos, senti um
          chamado pessoal para contribuir de maneira significativa. Reconheço o
          valor intrínseco das perspectivas femininas na criação de soluções
          inovadoras e centradas no usuário, tanto no design quanto na TI. A
          minha escolha de me envolver em atividades voluntárias é uma extensão
          desse compromisso. Ao oferecer meu tempo e habilidades, almejo apoiar
          outras mulheres que estejam buscando ingressar ou progredir nessas
          áreas. Desejo servir como um exemplo inspirador, compartilhando
          experiências, fornecendo orientações e capacitando mulheres para
          alcançarem seus objetivos profissionais em design e TI. Acredito
          profundamente na importância de fortalecer a presença feminina nessas
          indústrias, criando um ambiente mais inclusivo para futuras gerações.
          Através do voluntariado, busco colaborar com projetos e iniciativas
          que promovam o desenvolvimento pessoal e profissional das mulheres,
          ajudando-as a superar obstáculos e a construir carreiras
          bem-sucedidas. Minha motivação também se estende a incentivar mais
          mulheres a explorarem esses campos, aproveitando sua criatividade,
          habilidades analíticas e paixão pela inovação. Com a convicção de que
          a igualdade de gênero é fundamental para o avanço da sociedade, meu
          compromisso com o voluntariado é uma maneira tangível de contribuir
          para essa causa dentro das áreas de design e TI. Ao apoiar e capacitar
          mulheres, estou contribuindo para um futuro onde suas vozes sejam
          ouvidas, suas ideias sejam valorizadas e suas contribuições sejam
          essenciais para a evolução contínua desses setores dinâmicos."
        </p>
      </div>
      <div className="body-title-job">
        <p>Um pouco do meu trabalho</p>
      </div>
      <div className="body-div-wave"></div>
      <div className="footer-wave">
        <img src={footerWave}></img>
      </div>
    </>
  );
};

export default MeninadeUX;
