import React from "react";
import styled from "styled-components";
import { BsPencil } from "react-icons/bs";
import { Link } from "react-router-dom";

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
  }
  span{
    margin-left: 10px;
  }
`;

function MyQuestion() {
  return (
    <MyQuestionHead>
      <div>
        <h1>My Question: 0개</h1>
        <Link to='/create' style={{textDecoration: "none"}}>
          <button className="boardCreat">
            <BsPencil size={20}/>
            <span>Creat Question</span>
          </button>
        </Link>
      </div>
      <hr/>
    </MyQuestionHead>
  );
}

export default MyQuestion