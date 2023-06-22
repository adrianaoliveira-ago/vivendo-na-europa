import ReactMarkdown from "react-markdown";
import ReactDom from "react-dom";

import BlogPageVideos from "./BlogPageVideos";
import Hashtag from "./Hashtag";
import ArrowDown from "./Icons/arrow-down.svg";
import { useState, useEffect } from "react";
import Gallery from "./Gallery";
import IconSplitter from "./IconSplitter";

const BlogPost = ({
  subtitle,
  url,
  image,
  text1,
  text2,
  hashtagList = [],
  galleryList = [],
  urlList = [],
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
            {hashtagList.map((item) => {
              return (
                <Hashtag
                  name={item.name}
                  color={item.color || "#FFC9BC"}
                  link={item.link}
                ></Hashtag>
              );
            })}
          </div>
        </div>

        <img src={image} className="blogPage-img" onClick={onArrowClick} />

        {estaAberto && (
          <p className="blogPage-Text-1">
            {" "}
            <ReactMarkdown>{text1}</ReactMarkdown>;
          </p>
        )}

        {estaAberto && galleryList.length > 0 && (
          <Gallery list={galleryList} title={"Gallery"}></Gallery>
        )}

        {/* {estaAberto && <img src={image2} className="BlogPage-img2" />} */}

        {estaAberto && <p className="blogPage-Text-Maceio">{text2}</p>}
      </div>
      {urlList.length > 0 && estaAberto && (
        <BlogPageVideos list={urlList}></BlogPageVideos>
      )}
      {estaAberto && <IconSplitter />}
    </div>
  );
};

export default BlogPost;
