import { useEffect, useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import BlogPost from "./BlogPost";
import "./BlogPage.css";
import Title from "./Title";
import SocialIcons from "./SocialIcons";
import Snow from "./Snow";

// function BlogPage() {
const BlogPage = () => {
  const fetchUrl =
    "https://cdn.contentful.com/spaces/6m6n676gq222/environments/master/entries?access_token=pzHjF6PJP8oDSJGbJtG4Z0ntu66Q5FoOoQq3NuyUqbQ&content_type=blogPost";

  const [postList, setPostList] = useState([]);

  const fetchData = async () => {
    console.log("fetching Data");
    const response = await fetch(fetchUrl);
    const responseJson = await response.json();

    console.log(responseJson.items);
    const newArray = responseJson.items.map((item) => {
      return {
        title: item.fields.title,
        featureImg: item.fields.featureImg,
        content: item.fields.content,
        videos: item.fields.videos,
        gallery: item.fields.gallery,
        hashtags: item.fields.hashtags,
      };
    });
    console.log(newArray);
    setPostList(newArray);
  };

  useEffect(() => {
    console.log("component loaded");
    fetchData();
  }, []);

  return (
    <div className="blog-page-padding">
      <Header></Header>
      <Snow />
      <div className="blog-page-padding2">
        <Title name="Vivendo na Europa Travel Blog"></Title>
        <SocialIcons />
        <div className="blog-post-padding">
          {/* BlogPost Greece */}

          {postList.map((item) => {
            return (
              <BlogPost
                subtitle={item.title}
                image={item.featureImg}
                text1={item.content}
                urlList={item.videos}
                galleryList={item.gallery}
                hashtagList={item.hashtags}
              />
            );
          })}

          {/* BlogPost Berlin */}
          {/* <BlogPost
            subtitle={"Viagem para Berlim"}
            url="https://www.youtube.com/embed/-hUqzspclRc"
            image={BlogPostBerlin}
            text1="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
            image2={BlogPostBerlin2}
            text2="Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. "
            hashtagName="Berlin"
            hashtagLink="https://www.instagram.com/explore/tags/berlin/?hl=de"
          ></BlogPost> */}
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default BlogPage;
