import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import PInfiniteScroll from "./pages/PInfiniteScroll";
import PSearch from "./pages/PSearch";
import PZoomImage from "./pages/PZoomImage";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/infiniteScroll" element={<PInfiniteScroll />} />
        <Route exact path="/search" element={<PSearch />} />
        <Route exact path="/zoomImage" element={<PZoomImage />} />
      </Routes>
    </div>
  );
}

export default App;
