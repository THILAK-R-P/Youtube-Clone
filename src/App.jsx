import {useState} from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar.jsx";
import Sidebar from "./components/sidebar/sidebar.jsx";
import Home from "./home/home.jsx";
import Video from "./video/video.jsx";

const App = () => {
  const [sidebar,setSidebar] = useState(true);
  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </div>
  );
};

export default App;