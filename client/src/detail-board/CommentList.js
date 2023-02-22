import React from "react";
import styled from "styled-components";
import CommentItem from "./CommentItem";

export default function CommentList() {
  // const {boardCmt} = getCommentNum;
  
  // const getCommentNum = async () => {
  //   const response = await fetch('/pre/board');
  //   return await response.json();
  // }

  return (
    <List>
      <div className="title">'boardCmt' Answer</div>
      <CommentItem />
    </List>
  );
}

const List = styled.ul`
  padding-inline-start: 0;
  .title {
    border-top: 1px solid #ccc;
    padding-top: 2rem;
    font-weight: bold;
  }
`;