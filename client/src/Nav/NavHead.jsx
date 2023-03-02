import React from "react";
import styled from "styled-components";
import NavLogo from '../img/logo.png';

const NavHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 2.5rem;
  font-weight: 500;
  width: 90%;
  margin-bottom: 20px;
  img{
    width: 25px;
    margin-right: 5px;
  }
  span{
    margin: 0px 5px;
  }
`;

function NavHead() {
  return (
    <NavHeader>
      <img src={NavLogo} alt="NavLogo" />
      <span>Tag List</span>
    </NavHeader>
  );
}

export default NavHead;