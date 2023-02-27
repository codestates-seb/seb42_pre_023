import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

//시간 수정
export default function QuestionCard({ questions }) {
  const navigate = useNavigate();
  const {
    boardId,
    memberId,
    boardTitle,
    boardContent,
    boardViews,
    boardLike,
    boardCmt,
    createdAt,
  } = questions;
  const newContent = boardContent.slice(0,500);
 
  const timeForToday = (value) => {
    const today = new Date();
    const timeValue = new Date(value);

    const betweenTime = Math.floor(
      (today.getTime() - timeValue.getTime()) / 1000 / 60
    );
    if (betweenTime < 1) return "방금전";
    if (betweenTime < 60) {
      return `${betweenTime}분전`;
    }

    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
      return `${betweenTimeHour}시간전`;
    }

    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 365) {
      return `${betweenTimeDay}일전`;
    }

    return `${Math.floor(betweenTimeDay / 365)}년전`;
  };
  const date = timeForToday(new Date(createdAt))
  
  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/detail/${boardId}`)
  };

  return (
    <form onClick={handleClick}>
      <QContainer>
        <Qsummary>
          <QLikes>{boardLike} votes</QLikes>
          <QVote>{boardCmt} answers</QVote>
          <QViews>{boardViews} views</QViews>
        </Qsummary>

        <QContentContainer>
          <QTitle>{boardTitle}</QTitle>
          <QContent>{newContent}</QContent>
          <QInfoContainer>
            <Tagbox>
              <Tag>태그</Tag>
              <Tag>javaScript</Tag>
            </Tagbox>
            <div className="userInfo">
              <span>{memberId} </span>
              <span>asked {date}</span>
            </div>
          </QInfoContainer>
        </QContentContainer>
      </QContainer>
    </form>
  );
}
//<Tagbox>{questions.boardTags.map((tag)=>{
//  return <Tag key={questions.boardId}>{tag}</Tag>
//})}</Tagbox>


const QContainer = styled.div`
  width:calc(100% - 164px);
  display: flex;
  flex-direction: column;

  padding: 16px;
  border-bottom: 2px solid #ecebee;
`;

const Qsummary = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: flex-start;
`;
const QLikes = styled.div`
  font-size: 13px;
`;
const QVote = styled.div`
  font-size: 13px;
`;
const QViews = styled.div`
  font-size: 13px;
`;

const QContentContainer = styled.div``;
const QTitle = styled.p`
  font-size: 2rem;
  color: hsl(206, 100%, 40%);
  cursor:pointer;
  :hover{ 
    color: hsl(206,100%,52%)};
`;

const QContent = styled.p`
  font-size: 13px;
  margin-bottom: 8px;
`;

const QInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  span:first-child{
    color: hsl(206, 100%, 40%);
    font-weight: bold;
  }
`;
const Tagbox = styled.div`
  display: flex;
`;

const Tag = styled.div`
  color: #39739d;
  background-color: #e1ecf4;
  border-radius: 3px;
  margin: 3px;
  padding: 3px;
  font-size: 12px;
  :hover{
    background-color: hsl(206,93%,83.5%);
  };
`;
