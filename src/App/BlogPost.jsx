import BlogPageVideos from "./BlogPageVideos";
import Hashtag from "./Hashtag";
import ArrowDown from "./Icons/arrow-down.svg";
import { useState } from "react";

const BlogPost = ({
  subtitle,
  url,
  image,
  text1,
  text2,
  image2,
  hashtagName,
  hashtagLink,
  hashtagColor = "#FFC9BC",
}) => {
  const [estaAberto, mudarValorPara] = useState(false);

  const onArrowClick = () => {
    // console.log(estaAberto);

    if (estaAberto === false) {
      mudarValorPara(true);
    }

    if (estaAberto === true) {
      mudarValorPara(false);
    }
  };

  return (
    <div>
      <div className="blog-page-title">
        <div className="blog-page-subtitle">
          <div className="blog-page-arrow-Down-sub">
            <img
              className={estaAberto && "blog-page-arrow-rotate-up"}
              src={ArrowDown}
              onClick={onArrowClick}
            ></img>
            <h1 className="blog-page-viagem-para-atenas">{subtitle}</h1>
          </div>

          <div className="blog-page-hashtags">
            {hashtagName && ( // type of conditional - same as if (hashtagName)
              <Hashtag
                // className="blog-page-hashtag-effect"
                name={hashtagName}
                color={hashtagColor}
                link={hashtagLink}
              ></Hashtag>
            )}
            {/* <Hashtag name="Viagem" color="#FFC8D5" onClick="goToLink"></Hashtag> */}
          </div>
        </div>

        {/* <span className="filter-on-hover"> */}
        <img src={image} className="BlogPage-img" onClick={onArrowClick} />
        {/* </span> */}

        {estaAberto && <p className="BlogPage-Text-1">{text1}</p>}
        {estaAberto && <img src={image2} className="BlogPage-img2" />}
        {estaAberto && <p className="BlogPage-Text-Maceio">{text2}</p>}
      </div>
      {url && estaAberto && <BlogPageVideos url={url}></BlogPageVideos>}
    </div>
  );
};

export default BlogPost;
