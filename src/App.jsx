import React from "react";

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar.jsx";
import Home from "./home/home.jsx";

import Video from "./video/video.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </div>
  );
};

export default App;

