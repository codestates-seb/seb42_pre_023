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
}) {

  return (
    <Wrap>
      {displayHeader && <Header isLogin={isLogin}/>}
      <Container>
        {displayNav && <Nav setTagInfo={setTagInfo} />}
        <Main>
          <Outlet />
        </Main>
      </Container>
      {displayFooter && <Footer />}   
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  height: 1700px;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  width: 100%;
  /* height: 100%; */
`;

const Main = styled.div``;
