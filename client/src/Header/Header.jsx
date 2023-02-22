import React from "react";
import styled from "styled-components";

const HeaderTemplate = styled.header`
  width: 100vw;
  height: 10vh;
  border-bottom: 2px solid #bbbbbb;
  padding: 0 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f7f7f7;
`;

function Header({ children }) {
  return <HeaderTemplate>{ children }</HeaderTemplate>;
}

export default Header;