import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineEye, AiOutlineLike, AiFillLike } from "react-icons/ai";
import { BiShare } from "react-icons/bi";
import Comment from "./Comment";
import axios from "axios";
import { useParams } from "react-router-dom";

const getBoard = async () => {
  return axios.get("/api/pre/boards?page=1&size=15", {
    headers: { "ngrok-skip-browser-warning": "230227" },
  });
};

const getName = async () => {
  return axios.get("/api/pre/members?page=1&size=15", {
    headers: { "ngrok-skip-browser-warning": "230227" },
  });
};

export default function DetailBoard({userInfo}) {
  const { board } = useParams();
  const [boardData, setBoardData] = useState("");
  const [memberName, setMemberName] = useState("");
  const {
    memberId,
    boardTitle,
    boardContent,
    boardViews,
    boardLike,
    boardCmt,
    createdAt,
    boardTags,
  } = boardData;
  const [like, setLike] = useState(false);
  const date = new Date(createdAt).toLocaleString();

  
  useEffect(() => {
    getBoard().then((res) => {
      return res.data.data.filter((el) =>
      el.boardId == board ? setBoardData(el) : null
      );
    });
    getName().then((res) =>
    res.data.data.filter((el) =>
    el.memberId === memberId ? setMemberName(el.memberName) : ""
    )
    );
  }, []);
  
  useEffect(() => {
    if (sessionStorage.getItem("like") === "true") {
      setLike(!like);
    }
    if (sessionStorage.getItem("like") === "false") {
      setLike(like);
    }
  }, [])

  const updateLike = async (data) => {
    console.log(data);
    return axios.patch(`/api/pre/boards/${board}`, data);
  };

  const handleClick = () => {
    const likeUser = [];
    setLike(!like)
    if (like === false && likeUser.indexOf('memberId') === -1) {
      likeUser.push('memberId');
      sessionStorage.setItem('like', true);
      updateLike({
        boardTitle,
        boardContent,
        boardLike: boardLike + 1,
      });
      window.location.reload();
    } else {
      likeUser.filter((el) => el !== 'memberId');
      sessionStorage.setItem('like', false);
      updateLike({
        boardTitle,
        boardContent,
        boardLike: boardLike - 1,
      });
      window.location.reload();
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
        {/* {boardTags.map((tag) => (
          <button key={tag.tagId}>{tag.tagName}</button>
        ))} */}
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
      <Comment boardCmt={boardCmt} userInfo={userInfo} />
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
