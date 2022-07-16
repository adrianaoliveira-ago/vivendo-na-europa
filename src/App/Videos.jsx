import "./Videos.css";

function Videos() {
  return (
    <div className="videos-container">
      <h2 className="videos-title">Travel videos you might like</h2>

      <div className="videos-videos">
        <iframe
          width="545"
          height="309"
          src="https://www.youtube.com/embed/fk1ZmM486nA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <iframe
          width="545"
          height="309"
          src="https://www.youtube.com/embed/X3F5JsevHw8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="545"
          height="309"
          src="https://www.youtube.com/embed/Dqt4hRKlprc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Videos;
