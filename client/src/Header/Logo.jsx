import React from "react";
import styled from "styled-components";
import headerlogo from '../img/logoname.png';

const HeaderLogo = styled.div`
  width: 250px;
  height: 50px;
  cursor: pointer;
  img{
    width: 80%;
    height: auto;
  }
`

function Logo() {
  return(
    <HeaderLogo>
      <img src={headerlogo} alt="Header_logo" />
    </HeaderLogo>
  )
}

export default Logo