import "./BlogPageVideos.css";

const BlogPageVideos = ({ url }) => {
  return (
    <div className="blog-page-videos">
      <h2 className="blog-page-videos-title">videos you might like</h2>

      <div className="blog-page-videos-videos">
        <iframe
          width="560"
          height="315"
          src={url}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default BlogPageVideos;
