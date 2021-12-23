import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ width: "50%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flex: 1,
          fontSize: "1.5rem",
        }}
      >
        <Link to="/">홈</Link>
        <Link to="infiniteScroll">무한 스크롤</Link>
        <Link to="search">Search</Link>
        <Link to="zoomImage">ZoomImage</Link>
      </div>
    </div>
  );
};

export default Home;
