import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const LoginButton = styled.button`
  display: block;
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
  transition: all 0.1s;
  border: none;
  cursor: pointer;
  margin: 0 50px;
  background: ${(props) => (props.isLogin ? "#ff7171" : "#ffdbaf")};
  box-shadow: ${(props) =>
    props.isLogin ? "0px 5px 0px 0px #750f0f" : "0px 5px 0px 0px #aa6913"};

  &:hover {
    margin-top: 15px;
    margin-bottom: 5px;
    box-shadow: 0px 0px 0px 0px;
  }
`;

function Login({ isLogin }) {
  const navigate = useNavigate();
  const login = sessionStorage.getItem('login');
    // setIsLogin(login);

  const handleClick = () => {
    if (isLogin === false) {
      navigate("/login");
    } else if (isLogin === true) {
      localStorage.removeItem("token");
      sessionStorage.setItem("login", false);
      navigate("/");
      window.location.reload();
    }
  };

  return (
    <LoginButton isLogin={isLogin} onClick={handleClick}>
      {isLogin ? "Log out" : "Log in"}
    </LoginButton>
  );
}

export default Login;
