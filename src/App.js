import { Route, Routes } from "react-router-dom";
import "./App.css";
import { UserProvider } from "./datas/User/UserContextAPI";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PInfiniteScroll from "./pages/PInfiniteScroll";
import PSearch from "./pages/PSearch";
import PZoomImage from "./pages/PZoomImage";
import PComment from "./pages/PComment";
import MomentExample from "./pages/Moment";
import { RecoilRoot } from "recoil";
import RecoilTodo from "./pages/RecoilTodo";

function App() {
  return (
    <UserProvider>
      <RecoilRoot>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/infiniteScroll" element={<PInfiniteScroll />} />
            <Route exact path="/search" element={<PSearch />} />
            <Route exact path="/zoomImage" element={<PZoomImage />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/comment" element={<PComment />} />
            <Route exact path="/moment" element={<MomentExample />} />
            <Route exact path="/recoilTodo" element={<RecoilTodo/>} />
          </Routes>
        </div>
      </RecoilRoot>
    </UserProvider>
  );
}

export default App;
