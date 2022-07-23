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
import GalleryHome from "./Gallery/gallery.json";
// import GalleryLondres from "./Gallery/gallery.json";

function Content() {
  return (
    <div className="page-content">
      <Hero />
      <Title name="Vivendo na Europa" />
      <AboutMe />
      <Map />
      <Gallery list={GalleryHome.photos} />
      {/* <Gallery list={GalleryLondres.photos} /> */}
      <Videos />
      <Gyg />
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
