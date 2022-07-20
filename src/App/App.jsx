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

function Content() {
  return (
    <div className="page-content">
      <Hero />
      <Title name="Vivendo na Europa" />
      <AboutMe />
      {/* <Map /> */}
      {/* <Gallery /> */}
      {/* <Videos /> */}
      {/* <Gyg /> */}
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
