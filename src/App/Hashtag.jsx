import "./Hashtag.css";

const Hashtag = ({ name, color, link }) => {
  function goToLink() {
    window.open(link, "_blank"); //.focus();
  }

  return (
    <div
      className="hashtag-name"
      style={{ backgroundColor: color }}
      onClick={goToLink}
    >
      <text>#{name}</text>
    </div>
  );
};

export default Hashtag;
