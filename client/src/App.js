import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Login from "./login/Login";
import Signup from "./login/Signup";
import Section from "./Section/Section";
import DetailBoard from "./detail-board/DetailBoard";
import CreatBoard from "./CreatBoard/CreatBoard";
import UserInfo from "./Userinfo/UserInfo";
import Layout from "./Layout";
import TopButton from "./TopButton";
import axios from "axios";
//! App.js는 항상 이 상태로 형식을 유지할 것.
const GlobalStyle = createGlobalStyle`
  /* reset CSS */
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.6rem;
    line-height: 1.6;
    background: #fffcf9;
  }
  li {
    list-style: none;
  }
`;
//! App.js는 항상 이 상태로 형식을 유지할 것.
function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [tagInfo, setTagInfo] = useState({});
  const displayHeader = true;
  const displayNav = true;
  const displayFooter = true;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (sessionStorage.getItem("login") === "true") {
      setIsLogin(!isLogin);
    }
    if (sessionStorage.getItem("login") === "false") {
      setIsLogin(isLogin);
    }

    // const token = localStorage.getItem("token");
    // axios({
    //   url: "/api/pre/members/info",
    //   method: 'get',
    //   headers: { "ngrok-skip-browser-warning": "230228" },
    //   data: {
    //     memberEmail: id
    //   }
    // }).then((res) => console.log(res))
    const id = sessionStorage.getItem("id");
    axios
      .get("/api/pre/members?page=1&size=15", {
        headers: { "ngrok-skip-browser-warning": "230228" },
      })
      .then((res) =>
        res.data.data.filter((user) =>
          user.memberEmail === id ? setUserInfo(user) : null
        )
      );
  }, []);

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/login"
            element={
              <Login setIsLogin={setIsLogin} setUserInfo={setUserInfo} />
            }
          />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route
          element={
            <Layout
              displayHeader={displayHeader}
              displayNav={displayNav}
              displayFooter={displayFooter}
              isLogin={isLogin}
              setIsLogin={setIsLogin}
              setTagInfo={setTagInfo}
            />
          }
        >
          <Route path="/" element={<Section />} />
          <Route path="/:tagId" element={<Section tagInfo={tagInfo} />} />

          <Route path="/userinfo" element={<UserInfo userInfo={userInfo} isLogin={isLogin} setIsLogin={setIsLogin}/>} />
          <Route path="/detail/:board" element={<DetailBoard userInfo={userInfo} />} />
          <Route path="/create" element={<CreatBoard />} />
        </Route>
      </Routes>
      <TopButton />
    </>
  );
}
//! App.js는 항상 이 상태로 형식을 유지할 것.
export default App;
