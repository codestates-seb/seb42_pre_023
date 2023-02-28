import React from "react";
import styled from "styled-components";
import { BsPencil } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const MyQuestionHead= styled.div`
  margin-top: 20px;
  h1{
    display: inline-block;
  }
  hr{
    margin-top: 10px;
  }
  div{
    display: flex;
    align-items: center;
  }
  button{
    display: flex;
    align-items: center;
    margin-left: 30px;
    padding: 10px 20px;
    font-size: 20px;
    line-height: 20px;
    border-radius: 5px;
  }
  button:hover{
    background: #dddddd;
    cursor: pointer;
  }
  span{
    margin-left: 10px;
  }
`;



function MyQuestion() {
  const navigate = useNavigate();
  const CreateBoard = () => navigate('/create');
  return (
    <MyQuestionHead>
      <div>
        <h1>My Question: 0개</h1>
        <button className="boardCreat" onClick={CreateBoard}>
          <BsPencil size={20}/>
          <span>Creat Question</span>
        </button>
      </div>
      <hr/>
    </MyQuestionHead>
  );
}

export default MyQuestion