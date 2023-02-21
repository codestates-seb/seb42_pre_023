import React from "react";
import styled from "styled-components";
import headerlogo from '../img/logoname.png';

const HeaderLogo = styled.div`
  cursor: pointer;
  flex: 1.5;
  img {
    width: 170px;
    margin-right: 50px;
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