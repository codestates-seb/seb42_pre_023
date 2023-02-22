import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineEye, AiOutlineLike, AiFillLike } from "react-icons/ai";
import { BiShare } from "react-icons/bi";
import Comment from "./Comment";

export default function DetailBoard() {
  const [like, setLike] = useState(false);
  const [likeNum, setLikeNum] = useState(0);
  // const {
  //   memberId,
  //   boardTitle,
  //   boardContent,
  //   boardViews,
  //   boardLike,
  //   createdAt,
  // } = getBoard;
  // const { menberName } = getName;
  // const { tagId } = getTag;
  // const { tagName } = getTagName;

  // const getBoard = async () => {
  //   const res = await fetch("/pre/board");
  //   return await res.json();
  // };

  // const getName = async () => {
  //   const res = await fetch("/pre/member");
  //   return await res.json();
  // };

  // const getTag = async () => {
  //   const res = await fetch("/pre/boardTag");
  //   return await res.json();
  // }

  // const getTagName = async () =>  {
  //   await fetch("/pre/tag")
  //   .then((res) => res.json())
  //   .then((res) => res.filter((tag) => tag.tagId === tagId))
  // }

  const handleClick = () => {
    const likeUser = [];
    setLike(!like);
    if (like === false && likeUser.indexOf('memberId') === -1) {
      updateLike(likeNum + 1);
      setLikeNum(likeNum);
      likeUser.push('memberId');
    } else {
      updateLike(likeNum - 1);
      setLikeNum(likeNum);
      likeUser.filter((el) => el !== 'memberId');
    }
  };

  const updateLike = async (data) => {
    const res = await fetch("", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return await res.json();
  };

  return (
    <PostWrap>
      <h1>The Best Video Game Soundtracks of All Time 'boardTitle'</h1>
      <Info>
        <div>
          <span>'menberName' </span>
          <span>'createdAt' </span>
        </div>
        <span className="view">
          <AiOutlineEye /> 356 
          {/* {boardViews} */}
        </span>
      </Info>
      <div className="post-content">
        'boardContent'
        Video game soundtracks have come a long way . From epic orchestral
        scores to catchy chiptunes, video game music has become an art form in
        its own right. What are your favorite video game soundtracks? Let's
        share and discuss!
      </div>
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
          {/* {boardLike} */}
        </div>
        <div>
          <BiShare className="icon" /> Share
        </div>
      </Look>
      <Comment />
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
  margin-bottom: 10rem;
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
