import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Search from "./Search";
import Login from "./Login";
import MyInfo from "./MyInfo";

const HeaderTemplate = styled.header`
  width: 100vw;
  height: 100px;
  border-bottom: 2px solid #bbbbbb;
  padding: 0 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f7f7f7;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

function Header({isLogin}) {
  return (
    <HeaderTemplate>
      <Logo></Logo>
      <Search></Search>
      <Login isLogin={isLogin}></Login>
      <MyInfo isLogin={isLogin}></MyInfo>
    </HeaderTemplate>
  );
}

export default Header;