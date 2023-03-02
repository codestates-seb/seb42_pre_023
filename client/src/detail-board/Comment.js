import React from "react";
import styled from "styled-components";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

export default function Comment({ boardCmt, userInfo }) {
  return (
    <CommentWrap>
      <CommentList boardCmt={boardCmt} />
      <CommentCreate userInfo={userInfo} />
    </CommentWrap>
  );
}

const CommentWrap = styled.div``;
