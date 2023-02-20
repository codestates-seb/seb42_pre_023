import React from "react";
import styled from "styled-components";

const HeaderTemplate = styled.header`
  width: 100vw;
  height: 150px;
  border: 2px solid black;
`

function Header({ children }) {
  return <HeaderTemplate>{ children }</HeaderTemplate>;
}


export default Header;