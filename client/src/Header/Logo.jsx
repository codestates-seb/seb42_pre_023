import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import headerlogo from '../img/logoname.png';

const HeaderLogo = styled.div`
  cursor: pointer;
  flex: 1.5;
  img {
    width: 200px;
    margin-right: 50px;
    height: auto;
  }
`

function Logo() {
  return(
    <Link to='/'>
      <HeaderLogo>
        <img src={headerlogo} alt="Header_logo" />
      </HeaderLogo>
    </Link>
    
  )
}

export default Logo