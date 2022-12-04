import { useEffect, useState } from "react";

import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Map from "./Map";
import AboutMe from "./AboutMe";
import Gallery from "./Gallery";
import Videos from "./Videos";
import Gyg from "./Gyg";
import Title from "./Title";
import Hero from "./Hero";
// import GalleryHome from "./Gallery/gallery.json";
import NewGalleryHomePage from "./NewGalleryHomePage";
import Snow from "./Snow";

function Content() {
  const fetchUrl =
    "https://cdn.contentful.com/spaces/6m6n676gq222/environments/master/entries?access_token=pzHjF6PJP8oDSJGbJtG4Z0ntu66Q5FoOoQq3NuyUqbQ&content_type=home";

  const [heroList, setHeroList] = useState([]);
  const [galleryList, setGalleryList] = useState([]);
  const [gridList, setGridList] = useState([]);

  const fetchData = async () => {
    console.log("fetching Data");
    const response = await fetch(fetchUrl);
    const responseJson = await response.json();

    console.log(responseJson.items[0].fields);
    const fields = responseJson.items[0].fields;

    setHeroList(fields.featuredImages);
    setGalleryList(fields.gallery);
    setGridList(fields.expansibleGallery);
  };

  useEffect(() => {
    console.log("component loaded");
    fetchData();
  }, []);

  return (
    <div className="page-content">
      <Hero arrayImage={heroList} />
      <Title name="Vivendo na Europa" />
      <AboutMe />
      <Map />
      {galleryList.length > 0 && (
        <Gallery list={galleryList} title={"My Favourites Photos"} />
      )}
      <NewGalleryHomePage photosGrid={gridList} />
      <Videos />
      <Gyg />
      <Snow />
    </div>
  );
}

const App = () => {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
