import React from "react";
import styled from "styled-components";

const NavTemplate = styled.nav`
  width: 250px;
  height: 90vh;
  border-right: 2px solid #bbbbbb;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f7f7f7;
  padding-top: 50px;
  position: relative;
  z-index: 0;
`;

function Nav({ children }) {
  return <NavTemplate>{ children }</NavTemplate>;
}

export default Nav;