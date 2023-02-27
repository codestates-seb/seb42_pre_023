import React from "react";
import styled from "styled-components";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyInfoButton = styled.button`
  width: 60px;
  height: 50px;
  padding: 10px 25px;
  border: 2px solid #948f8f;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  line-height: 50px;
  padding: 0;
  flex: 0.4;

  &:hover {
    background: transparent;
    color: #000;
  }
  span {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  &:before,
  &:after {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    background: #000;
    transition: all 0.3s ease;
  }
  &:before {
    height: 0%;
    width: 2px;
  }
  &:after {
    width: 0%;
    height: 2px;
  }
  &:hover:before {
    height: 100%;
  }
  &:hover:after {
    width: 100%;
  }
  span {
    padding: 0px 10px;
  }
  span:before,
  span:after {
    position: absolute;
    content: "";
    right: 0;
    bottom: 0;
    background: #000;
    transition: all 0.3s ease;
  }
  span:before {
    width: 2px;
    height: 0%;
  }
  span:after {
    width: 0%;
    height: 2px;
  }
  span:hover:before {
    height: 100%;
  }
  span:hover:after {
    width: 100%;
  }
`;

function MyInfo({isLogin}) {
  return (
    <Link to='/userinfo'>
    {!isLogin ? 
      <MyInfoButton>
        <span>
          <FaUser size={20} />
        </span>
      </MyInfoButton>: null}
    </Link>
  );
}

export default MyInfo;
