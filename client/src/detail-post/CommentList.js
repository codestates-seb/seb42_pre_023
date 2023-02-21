import React from "react";
import styled from "styled-components";
import CommentItem from "./CommentItem";

export default function CommentList() {
  return (
    <List>
      <div className="title">1 Answer</div>
      <CommentItem />
    </List>
  );
}

const List = styled.ul`
  padding-inline-start: 0;
  .title {
    border-top: 1px solid #ccc;
    padding-top: 1rem;
    font-weight: bold;
  }
`;