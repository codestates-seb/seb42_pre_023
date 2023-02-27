import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Login({ isLogin, setIsLogin}) {

  const LogOutClick = () => {
    setIsLogin(!isLogin);
    localStorage.removeItem("token");
  }

  return (
    <>
      <Link to='/login'>
        <LoginButton isLogin={isLogin}>Log in</LoginButton>
      </Link>
      <LogOutButton isLogin={isLogin} onClick ={LogOutClick}>Log Out</LogOutButton>
    </>
  )
}

const LoginButton = styled.button`
  display: ${props => props.isLogin ? "none" : "block"};
  position: relative;
  float: left;
  width: 120px;
  height: 50px;
  padding: 0px 20px;
  margin: 5px 20px 5px 0;
  font-weight: 600;
  text-align: center;
  line-height: 50px;
  color: #333333;
  font-size: 1.5rem;
  border-radius: 10px;
  transition: all 0.1s ;
  border: none;
  cursor: pointer;
  margin: 0 50px;
  background: #ffdbaf;
  box-shadow: 0px 5px 0px 0px #aa6913;

  &:hover{
    margin-top: 15px;
    margin-bottom: 5px;
    box-shadow: 0px 0px 0px 0px;
  }
`
const LogOutButton = styled.button`
  display: ${props => props.isLogin ? "block" : "none"};
  position: relative;
  float: left;
  width: 120px;
  height: 50px;
  padding: 0px 20px;
  margin: 5px 20px 5px 0;
  font-weight: 600;
  text-align: center;
  line-height: 50px;
  color: #333333;
  font-size: 1.5rem;
  border-radius: 10px;
  transition: all 0.1s ;
  border: none;
  cursor: pointer;
  margin: 0 50px;
  background: #ff7171;
  box-shadow: 0px 5px 0px 0px #750f0f;

  &:hover{
    margin-top: 15px;
    margin-bottom: 5px;
    box-shadow: 0px 0px 0px 0px;
  }
`

export default Login