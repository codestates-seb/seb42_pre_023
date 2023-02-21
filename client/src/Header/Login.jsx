import React from "react";
import styled from "styled-components";

const LoginButton = styled.button`
  display: block;
  position: relative;
  float: left;
  width: 120px;
  padding: 0;
  margin: 5px 20px 5px 0;
  font-weight: 600;
  text-align: center;
  line-height: 50px;
  color: #333333;
  font-size: 1.7rem;
  border-radius: 10px;
  transition: all 0.2s ;
  background: #ffbc6a;
  box-shadow: 0px 5px 0px 0px #A66615;
  border: none;
  cursor: pointer;

  &:hover{

    margin-top: 15px;
    margin-bottom: 5px;
    box-shadow: 0px 0px 0px 0px #A66615;
  }
`

function Login() {
  return(
    <LoginButton>Login</LoginButton>
  )
}

export default Login