import React from "react";
import styled from "styled-components";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

export default function Comment({ boardCmt }) {
  return (
    <CommentWrap>
      <CommentList boardCmt={boardCmt} />
      <CommentCreate />
    </CommentWrap>
  );
}

const CommentWrap = styled.div``;
