import "./index.css";
// import ButtonIcon from "./ButtonIcon";

import footerWave from "./footerWave.svg";
import divWave from "./divWave.svg";
import photo2 from "./photo2.svg";
import photoHeader from "./photoHeader.svg";
import mockup1 from "./mockup1.svg";
import mockup2 from "./mockup2.svg";

const MeninadeUX = () => {
  const data = {
    about:
      "Me chamo Adriana e como uma pessoa que mudou de carreira e está fazendo a transição para a área de TI como designer de UI/UX e desenvolvedora de front-end e estudante de Design, estou animada para aplicar minha nova perspectiva e paixão por inovação para criar experiências digitais excepcionais e trazer diferentes pontos de vista ao Design em geral.",
    bodyText:
      "Optei por me inscrever para o voluntariado movida por uma visão maior de promover inclusão e igualdade, especialmente dentro das áreas de design e tecnologia da informação (TI). Ao observar o progresso e o impacto positivo que mulheres têm trazido para esses campos, senti um chamado pessoal para contribuir de maneira significativa. Reconheço o valor intrínseco das perspectivas femininas na criação de soluções inovadoras e centradas no usuário, tanto no design quanto na TI. A minha escolha de me envolver em atividades voluntárias é uma extensão desse compromisso. Ao oferecer meu tempo e habilidades, almejo apoiar outras mulheres que estejam buscando ingressar ou progredir nessas áreas. Desejo servir como um exemplo inspirador, compartilhando experiências, fornecendo orientações e capacitando mulheres para alcançarem seus objetivos profissionais em design e TI. Acredito profundamente na importância de fortalecer a presença feminina nessas indústrias, criando um ambiente mais inclusivo para futuras gerações. Através do voluntariado, busco colaborar com projetos e iniciativas que promovam o desenvolvimento pessoal e profissional das mulheres, ajudando-as a superar obstáculos e a construir carreiras bem-sucedidas. Minha motivação também se estende a incentivar mais mulheres a explorarem esses campos, aproveitando sua criatividade, habilidades analíticas e paixão pela inovação. Com a convicção de que a igualdade de gênero é fundamental para o avanço da sociedade, meu compromisso com o voluntariado é uma maneira tangível de contribuir para essa causa dentro das áreas de design e TI. Ao apoiar e capacitar mulheres, estou contribuindo para um futuro onde suas vozes sejam ouvidas, suas ideias sejam valorizadas e suas contribuições sejam essenciais para a evolução contínua desses setores dinâmicos.",
  };

  return (
    <>
      <div className="meninadeux-header">
        <ul className="meninadeux-ul">
          <li>Blog</li>
          <li>Designs</li>
          <li>Instagram</li>
        </ul>

        <div className="meninadeux-header-about-me">
          <div>
            <h1 className="header-title">About me</h1>
            <h2 className="header-text">{data.about}</h2>
          </div>
          <img src={photoHeader} className="header-photo"></img>
        </div>
      </div>

      <div className="meninadeux-header-wave"></div>
      <div className="meninadeux-body">
        <img src={photo2} className="body-photo"></img>
        <p className="body-text">{data.bodyText}</p>
      </div>
      <div className="body-title-job">
        <p>Um pouco do meu trabalho</p>
      </div>
      <div>
        <img src={divWave}></img>
        <img src={mockup1}></img>
        <img src={mockup2}></img>
      </div>
      <div className="footer-wave">
        <img src={footerWave}></img>
      </div>
    </>
  );
};

export default MeninadeUX;
