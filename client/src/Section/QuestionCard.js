import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

//title에서 링크
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

  const handleClick = (e) => {
    e.preventDefault();
    // console.log(boardId)
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
          <QContent>{boardContent}</QContent>
          <QInfoContainer>
            <Tagbox>
              <Tag>태그</Tag>
              <Tag>javaScript</Tag>
            </Tagbox>
            <span>
              {memberId} asked {createdAt}
            </span>
          </QInfoContainer>
        </QContentContainer>
      </QContainer>
    </form>
  );
}

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
  font-size: 17px;
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
  /* span{
  font-size: 12px;
  color:#0074CC;
} */
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
