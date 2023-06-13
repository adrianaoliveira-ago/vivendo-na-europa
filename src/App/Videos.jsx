import { useEffect, useState } from "react";

import "./Videos.css";

function Videos() {
  const fetchUrl =
    "https://cdn.contentful.com/spaces/6m6n676gq222/environments/master/entries?access_token=pzHjF6PJP8oDSJGbJtG4Z0ntu66Q5FoOoQq3NuyUqbQ&content_type=youtubeVideos";

  const [videoList, setVideoList] = useState([]);

  const fetchData = async () => {
    console.log("fetching Data");
    const response = await fetch(fetchUrl);
    const responseJson = await response.json();

    console.log(responseJson.items);
    const newArray = responseJson.items.map((item) => {
      return { url: item.fields.url };
    });
    console.log(newArray);
    setVideoList(newArray);
  };

  useEffect(() => {
    console.log("component loaded");
    fetchData();
  }, []);

  // const videospage = [
  //   {
  //     src: "https://www.youtube.com/embed/fk1ZmM486nA",
  //   },
  //   {
  //     src: "https://www.youtube.com/embed/X3F5JsevHw8",
  //   },
  //   {
  //     src: "https://www.youtube.com/embed/Dqt4hRKlprc",
  //   },
  // ];
  return (
    <div className="videos-container">
      <h2 className="videos-title">Travel videos you might like</h2>

      <div className="videos-videos">
        {videoList.map((item) => {
          return (
            <iframe
              className="videos_iframe"
              width="545"
              height="309"
              src={item.url}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          );
        })}
      </div>
    </div>
  );
}

export default Videos;
