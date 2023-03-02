import React,{useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
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
  const [tagList, settagList]=useState([]);
  const handleClick = (e) => {
    console.log(e.target.textContent);
    setTagInfo(e.target.textContent);
    navigate(`/${e.target.textContent}`);
  };
  const getTList = async() => {
    return axios.get(`/DUMMYDATA/tags.json`)
  }
  // const getQList = async() => {
  //   return axios.get(`/DUMMYDATA/boards.json`)
  // }
  useEffect(() => {
    getTList().then((res) => settagList(res.data));
   
  }, []);

 
  // const TagList = [
  //   "JavaScrpit",
  //   "React",
  //   "HTML",
  //   "Java",
  //   "Swift",
  //   "C",
  //   "C++",
  //   "C#",
  //   "Python",
  // ];

  return (
    <TagItem>
      {tagList.map((tags) => (
        <li key={tags.tagId} onClick={handleClick}>{tags.tagName}
        <span> {}</span>
        </li>
      ))}
    </TagItem>
  );
}

export default TagList;
