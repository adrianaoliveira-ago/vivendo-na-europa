import "./Title.css";

const Title = ({ name }) => {
  return (
    <div>
      <h1 className="title-text">{name}</h1>
    </div>
  );
};

export default Title;
