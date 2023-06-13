import "./Title.css";

const Title = ({ name }) => {
  return (
    <div>
      <h1 className="title-text animate__animated animate__rubberBand ">
        {name}
      </h1>
    </div>
  );
};

export default Title;
