import React from "react";
import styled from "styled-components";
import NavHead from "./NavHead";
import TagSearch from "./TagSearch";
import TagListTemplate from "./TagListTemplate";
import TagList from "./TagList";

const NavTemplate = styled.nav`
  width: 250px;
  height: 100vh;
  border-right: 2px solid rgb(187, 187, 187);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f7f7f7;
  padding-top: 50px;
  position: relative;
  position: fixed;
  left: 0;
  top: 98px;
`;

function Nav() {
  return (
    <NavTemplate>
      <NavHead/>
      <TagSearch/>
      <TagListTemplate>
          <TagList/>
      </TagListTemplate>
    </NavTemplate>
  );
}

export default Nav;