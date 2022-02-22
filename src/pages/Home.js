import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../datas/User/UserContextAPI";

const Home = () => {
  const { userData } = useContext(UserContext);

  return (
    <div style={{ width: "50%" }}>
      <h1>{userData.length ? userData[0].id : '댓글기능 사용시 로그인이 필요합니다.'}</h1>
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
        <Link to="login">Login</Link>
        <Link to="comment">Comment</Link>
        <Link to="moment">Moment</Link>
      </div>
    </div>
  );
};

export default Home;
