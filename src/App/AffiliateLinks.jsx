import { useEffect, useState } from "react";

import AffiliateCard from "./AffiliateCard";
import Title from "./Title";
import "./AffiliateCard.css";
import "./AffiliateLinks.css";
import Footer from "./Footer";
import Header from "./Header";

// prop hideHeader: boolean
const AffiliateLinks = ({ hideHeader = false }) => {
  const fetchUrl =
    "https://cdn.contentful.com/spaces/6m6n676gq222/environments/master/entries?access_token=pzHjF6PJP8oDSJGbJtG4Z0ntu66Q5FoOoQq3NuyUqbQ&content_type=affiliates";

  const [postLinks, setPostLinks] = useState([]);

  const fetchData = async () => {
    console.log("fetching Data");

    const response = await fetch(fetchUrl);
    const responseJson = await response.json();

    console.log("fetch > responseJson.items", responseJson.items);

    const newArray = responseJson.items.map((item) => {
      return {
        borderColor: item.fields.borderColor,
        boxColor: item.fields.boxColor,
        comment: item.fields.comment,
        href: item.fields.href,
        imgSrc: item.fields.imgSrc,
        imgSrcTracking: item.fields.imgSrcTracking,
        tagColor: item.fields.tagColor,
        tagIcon: item.fields.tagIcon,
        title: item.fields.title,
        tagName: item.fields.tagName,
      };
    });
    console.log(newArray);
    setPostLinks(newArray);
  };

  useEffect(() => {
    console.log("component loaded");
    fetchData();
  }, []);

  return (
    <div className="affiliate-div">
      {hideHeader === false && (
        <div className="header">
          <Header />
        </div>
      )}

      <Title name="Affiliate Links" />
      <div className="affiliate">
        {postLinks.map((item) => {
          return (
            <AffiliateCard
              key={item.tagIcon}
              tagIcon={item.tagIcon}
              title={item.title}
              comment={item.comment}
              tagName={item.tagName}
              href={item.href}
              imgSrc={item.imgSrc}
              imgSrcTracking={item.imgSrcTracking}
              tagColor={item.tagColor}
              boxColor={item.boxColor}
              borderColor={item.borderColor}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AffiliateLinks;
