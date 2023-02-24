import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineEye, AiOutlineLike, AiFillLike } from "react-icons/ai";
import { BiShare } from "react-icons/bi";
import Comment from "./Comment";
import axios from "axios";
import { useParams } from "react-router-dom";

const getBoard = async () => {
  return axios.get("/DUMMYDATA/boards.json");
};

const getName = async () => {
  return axios.get("/DUMMYDATA/members.json");
};
// const getTag = async () => {
//   return axios.get("");
// }

// const getTagName = async () =>  {
//   return axios.get("")
//   .then((res) => res.filter((tag) => tag.tagId === tagId))
// }

const updateLike = async (data) => {
  // console.log(data)
  return axios.patch("/DUMMYDATA/boards.json", data);
};

export default function DetailBoard() {
  const [boardData, setBoardData] = useState("");
  const [memberName, setMemberName] = useState("");
  const [like, setLike] = useState(false);
  const [likeNum, setLikeNum] = useState(0);
  const { board } = useParams();
  const {
    memberId,
    boardTitle,
    boardContent,
    boardViews,
    boardLike,
    boardCmt,
    createdAt,
  } = boardData;
  // const { tagId } = getTag(0);
  // const { tagName } = getTagName();

  const date = new Date(createdAt).toLocaleString();

  useEffect(() => {
    getBoard().then((res) => res.data.filter((el) => el.boardId === board ? setBoardData(el) : null));
    getName().then((res) =>
      res.data.filter((el) =>
        el.memberId === memberId ? setMemberName(el.memberName) : ""
      )
    );
  }, [board, memberId]);

  const handleClick = () => {
    const likeUser = [];
    setLike(!like);
    if (like === false && likeUser.indexOf("memberId") === -1) {
      updateLike(likeNum + 1);
      setLikeNum(likeNum + 1);
      likeUser.push("memberId");
    } else {
      updateLike(likeNum - 1);
      setLikeNum(likeNum - 1);
      likeUser.filter((el) => el !== "memberId");
    }
  };

  return (
    <PostWrap>
      <h1>{boardTitle}</h1>
      <Info>
        <div>
          <span>{memberName}</span>
          <span>{date}</span>
        </div>
        <span className="view">
          <AiOutlineEye /> 356
          {boardViews}
        </span>
      </Info>
      <div className="post-content">{boardContent}</div>
      <div className="tag-list">
        {/* {tagName.map((tag) => {
            <button>{tag}</button>
        })} */}
        <button>java</button>
        <button>javascript</button>
      </div>
      <Look>
        <div onClick={handleClick}>
          {like ? (
            <AiFillLike className="icon" />
          ) : (
            <AiOutlineLike className="icon" />
          )}
          {boardLike}
        </div>
        <div>
          <BiShare className="icon" /> Share
        </div>
      </Look>
      <Comment boardCmt={boardCmt} />
    </PostWrap>
  );
}

const PostWrap = styled.div`
  /* background-color: #ddd; */
  list-style: none;
  max-width: 1100px;
  width: calc(100% - 164px);
  height: 100vh;
  padding: 3rem;
  /* margin-bottom: 10rem; */
  margin: 15rem 0 35rem 30rem; //지우기
  .tag-list > button {
    margin-right: 0.5rem;
    padding: 0.7rem;
    border: none;
    border-radius: 5px;
    background-color: #eee;
    color: #1e5295;
  }
  .tag-list {
    padding: 1.5rem;
  }
  .post-content {
    padding: 1.5rem;
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 1rem;
  div {
    flex-grow: 1;
  }
  span {
    &:nth-child(2) {
      color: #5f5f5f;
    }
    padding-right: 1rem;
  }
  .view {
    flex-grow: 0;
  }
`;

const Look = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  padding: 1.5rem;
  .icon {
    font-size: 2.2rem;
  }
  div {
    margin-right: 2rem;
  }
`;
