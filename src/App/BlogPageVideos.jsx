import "./BlogPageVideos.css";

const BlogPageVideos = ({ list }) => {
  return (
    <div className="blog-page-videos">
      <h2 className="blog-page-videos-title">videos you might like</h2>

      <div className="blog-page-videos-videos">
        {list.map((item) => {
          return (
            <iframe
              className="blog-page-size-video"
              width="560"
              height="315"
              src={item}
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
};

export default BlogPageVideos;
