import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App/App";
import BlogPage from "./App/BlogPage";
import TravelPage from "./App/TravelPage";
import SnowPage from "./App/SnowPage";
import CheatPage from "./App/CheatPage";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="travel" element={<TravelPage />} />
        <Route path="snow" element={<SnowPage />} />
        <Route path="cheat" element={<CheatPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
