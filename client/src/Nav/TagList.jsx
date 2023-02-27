import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const TagItem = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 80%;

  li {
    border-radius: 50px;
    padding: 2px 10px;
    margin-top: 10px;
    font-family: "Lato", sans-serif;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }
  li:after {
    position: absolute;
    content: " ";
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.3s ease;
    -webkit-transform: scale(0.1);
    transform: scale(0.1);
  }
  li:hover {
    color: #fff;
  }
  li:hover:after {
    background: #000;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`;

function TagList({ setTagInfo }) {
  const navigate = useNavigate();
  const handleClick = (e) => {
    console.log(e.target.textContent);
    setTagInfo(e.target.textContent);
    navigate(`/${e.target.textContent}`);
  };
  const TagList = [
    "JavaScrpit",
    "React",
    "HTML",
    "Java",
    "Swift",
    "C",
    "C++",
    "C#",
    "Python",
  ];

  return (
    <TagItem>
      {TagList.map((el, idx) => (
        <li key={idx} onClick={handleClick}>{el}</li>
      ))}
    </TagItem>
  );
}

export default TagList;
