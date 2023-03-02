import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CommentItem from "./CommentItem";

export default function CommentList({ boardCmt }) {
  const { board } = useParams();
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    axios.get(`/api/pre/comments/list/${board}`, {
      headers: { "ngrok-skip-browser-warning": "230228" },
    }).then((res) => setCommentList(res.data.data));
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
