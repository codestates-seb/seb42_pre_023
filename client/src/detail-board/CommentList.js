import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CommentItem from "./CommentItem";

const getComment = async () => {
  return axios.get("/DUMMYDATA/comments.json");
};

export default function CommentList({ boardCmt }) {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    getComment().then((res) => setCommentList(res.data));
  }, []);

  return (
    <List>
      <div className="title">{boardCmt} Answer</div>
      {commentList.map((comment) => (
        <CommentItem
          key={comment.commentId}
          memberId={comment.memberId}
          commentContent={comment.commentContent}
          createdAt={comment.createdAt}
        />
      ))}
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
