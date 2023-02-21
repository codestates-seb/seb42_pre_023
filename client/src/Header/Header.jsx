import React from "react";
import styled from "styled-components";

const HeaderTemplate = styled.header`
  width: 100vw;
  height: 80px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

function Header({ children }) {
  return <HeaderTemplate>{ children }</HeaderTemplate>;
}

export default Header;