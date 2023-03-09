import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

ReactDOM.render(
  <React.StrictMode>
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
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
