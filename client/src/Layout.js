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
}) {
  return (
    <Wrap>
      {displayHeader && <Header isLogin={isLogin} />}
      <Container>
        {displayNav && <Nav />}
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
  height: 2000px;
  position: relative;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Main = styled.div``;
