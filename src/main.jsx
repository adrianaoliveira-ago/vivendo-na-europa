import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";

import "./index.css";
import App from "./App/App";
import BlogPage from "./App/BlogPage";
import TravelPage from "./App/TravelPage";
import SnowPage from "./App/SnowPage";
import CheatPage from "./App/CheatPage";
import GridGallery from "./App/GridGallery";
import LightBulb from "./App/LightBulb";
import CounterPage from "./App/CounterPage";
import ThermostatPage from "./App/ThermostatPage";
import AffiliateLinks from "./App/AffiliateLinks";
import ItineraryLinks from "./App/ItineraryLinks";
import MeninadeUX from "./MeninadeUx";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="travel" element={<TravelPage />} />
          <Route path="snow" element={<SnowPage />} />
          <Route path="cheat" element={<CheatPage />} />
          <Route path="gridGallery" element={<GridGallery />} />
          <Route path="lightBulb" element={<LightBulb />} />
          <Route path="counter" element={<CounterPage />} />
          <Route path="thermostat" element={<ThermostatPage />} />
          <Route path="affiliate-links" element={<AffiliateLinks />} />
          <Route path="itinerary-links" element={<ItineraryLinks />} />
          <Route path="menina-de-ux" element={<MeninadeUX />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
