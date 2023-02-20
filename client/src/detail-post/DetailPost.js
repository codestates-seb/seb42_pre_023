import React from "react";
import styled from "styled-components";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { BiShare } from "react-icons/bi";
import Comment from "./Comment";

export default function DetailPost() {
  return (
    <PostWrap>
        <h1>The Best Video Game Soundtracks of All Time</h1>
        <Info>
          <div>
            <span>작성자</span>
            <span>작성일</span>
          </div>
          <span className="view">
            <AiOutlineEye /> 356
          </span>
        </Info>
        <p>
          Video game soundtracks have come a long way . From epic orchestral
          scores to catchy chiptunes, video game music has become an art form in
          its own right. What are your favorite video game soundtracks? Let's
          share and discuss!
        </p>
        <div className="tag-list">
          <button>java</button>
          <button>javascript</button>
        </div>
        <Look>
          <div><AiOutlineLike /> 0</div>
          <div><BiShare /> Share</div>
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
  .tag-list > button {
    margin-right: 0.5rem;
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
  div {
    margin-right: 1rem;
  }
`