import { Route, Routes, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import PInfiniteScroll from "./pages/PInfiniteScroll";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route exact path="/infiniteScroll" element={<PInfiniteScroll />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
