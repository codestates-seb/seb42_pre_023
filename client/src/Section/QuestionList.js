import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import QuestionContainer from "./QuestionContainer"

import { Link } from "react-router-dom";

export default function QuestionList() {
  const [questionList, setQuestionList] = useState([]);
  
  useEffect(() => {
    axios
      .get("/api/pre/boards?page=1&size=15", {
        headers: { "ngrok-skip-browser-warning": "230227" },
      })
      .then((res) => setQuestionList(res.data.data))
      .catch((error) => console.log(error))
  }, []);

  //필터
  const handleViews = () => {
    if (
      questionList[0].boardViews <
      questionList[questionList.length - 1].boardViews
    ) {
      let newArr = [...questionList];
      let Upviews = newArr.sort((a, b) => {
        return b.boardViews - a.boardViews;
      });
      setQuestionList(Upviews);
    } else {
      let newArr = [...questionList];
      let Downviews = newArr.sort((a, b) => {
        return a.boardViews - b.boardViews;
      });
      setQuestionList(Downviews);
    }
  };

  const handleAnswer = () => {
    if (
      questionList[0].boardCmt < questionList[questionList.length - 1].boardCmt
    ) {
      let newArr = [...questionList];
      let Upanswer = newArr.sort((a, b) => {
        return b.boardCmt - a.boardCmt;
      });
      setQuestionList(Upanswer);
    } else {
      let newArr = [...questionList];
      let Downanswer = newArr.sort((a, b) => {
        return a.boardCmt - b.boardCmt;
      });
      setQuestionList(Downanswer);
    }
  };

  const handleCreatedAt = () => {
    if (
      new Date(questionList[0].createdAt) <
      new Date(questionList[questionList.length - 1].createdAt)
    ) {
      let newArr = [...questionList];
      let newest = newArr.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      setQuestionList(newest);
    } else {
      let newArr = [...questionList];
      let oldest = newArr.sort((a, b) => {
        return new Date(a.createdAt) - new Date(b.createdAt);
      });
      setQuestionList(oldest);
    }
  };

  return (
    <>
      <HeadContainer>
        <H1>
          <h1>All Questions</h1>
          <Link to="/create">
            <AskQButton>Ask Question</AskQButton>{" "}
          </Link>
        </H1>
        <H2>
          <QCount>questions</QCount>
          <FilterWrap>
            <Button onClick={handleViews}>Views</Button>
            <Button onClick={handleAnswer}>Anwsers</Button>
            <Button onClick={handleCreatedAt}>createdAt</Button>
          </FilterWrap>
        </H2>
      </HeadContainer>
      <QuestionContainer questionList={questionList} />
    </>
  );
}
const HeadContainer = styled.div`
  border-bottom: 1px solid gray;
  width: calc(100% - 164px);
  padding: 15px;
  box-sizing: border-box;
  h1 {
    font-size: 3.5rem;
    margin-right: 12px;
    margin-bottom: 12px;
    padding-left: 10px;
  }
`;

const H1 = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const H2 = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const QCount = styled.div`
  font-size: 25px;
  padding-left: 20px;
`;

const AskQButton = styled.button`
  background-color: #0a95ff;
  border: 1px;
  color: white;
  font-size: 1.5rem;
  text-align: center;
  padding: 5 20px;
  width: 140px;
  height: 50px;
  border-radius: 10px;

  font-weight: bold;
  cursor: pointer;
  :hover {
    background-color: rgb(0 116 204);
  }
`;
const FilterWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button:first-child {
    border-radius: 3px 0 0 3px;
  }
  button:last-child {
    border-radius: 0 3px 3px 0;
  }
`;

const Button = styled.button`
  /* width:80px; */
  font-size: 15px;
  font-weight: 500;
  padding: 9px;
  cursor: pointer;
  background: white;
  color: #6a737c;
  border: 1px solid #6a737c;
  width: 90px;
  :hover {
    background-color: hsl(210, 8%, 97.5%);
    color: black;
  }
  :active {
  }
`;