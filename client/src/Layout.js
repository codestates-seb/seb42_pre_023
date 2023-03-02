import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "./footer/Footer";
import Header from "./Header/Header";
import Nav from "./Nav/Nav";

export default function Layout({
  displayHeader = false,
  displayNav = false,
  displayFooter = false,
  isLogin,
  setTagInfo,
  setIsLogin,
}) {

  return (
    <Wrap>
      {displayHeader && <Header isLogin={isLogin} setIsLogin ={setIsLogin} />}
      {displayNav && <Nav setTagInfo={setTagInfo} />}
      {displayFooter && <Footer />}
      <Outlet />
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  height: 3000px;
  position: relative;
  overflow: hidden;
`;

