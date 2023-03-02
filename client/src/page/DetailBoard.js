import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineEye, AiOutlineLike, AiFillLike } from "react-icons/ai";
import { BiShare } from "react-icons/bi";
import Comment from "../detail-board/Comment";
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

export default function DetailBoard({ userInfo }) {
  const { board } = useParams();
  const [boardData, setBoardData] = useState({ boardLike: +1, boardTags: [] });
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
  }, [boardLike]);

  useEffect(() => {
    if (sessionStorage.getItem(`like${board}`) === "true") {
      setLike(!like);
    }
    if (sessionStorage.getItem(`like${board}`) === "false") {
      setLike(like);
    }
  }, []);

  const updateLike = async () => {
    return axios
      .get(`/api/pre/boards/boardLike/${board}`, {
        headers: { "ngrok-skip-browser-warning": "230227" },
      })
      .then((res) => console.log(res.data.data));
  };

  const isLogin = sessionStorage.getItem('login')
  const handleClick = () => {
    const likeUser = [];
    if (userInfo !== {}) {
      if (like === false && likeUser.indexOf(userInfo.memberId) === -1) {
        likeUser.push(userInfo.memberId)
        localStorage.setItem(`likeUser${board}`, likeUser)
        sessionStorage.setItem(`like${board}`, true);
        updateLike();
        window.location.reload();
      } 
    } else if (userInfo === {} || isLogin === false) {
      alert('로그인 후 이용해주세요.')
      // likeUser.filter((el) => el !== userInfo.memberId);
      // sessionStorage.setItem("like", false);
      // updateLike();
      // window.location.reload();
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
        {boardTags.map((tag) => (
          <button key={tag.tagId}>{tag.tagName}</button>
        ))}
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
