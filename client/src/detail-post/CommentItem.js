import React from "react";
import styled from "styled-components";
import {FaRegUserCircle} from "react-icons/fa";


export default function CommentItem() {
  return (
    <Item>
      <div className="user">
        <FaRegUserCircle className="user-icon" />
        <span className="user-name">댓글 다는 사람 이름</span>
      </div>
      <div className="cmt-content"><p>데이터 가져오는 곳</p></div>
    </Item>
  );
}

const Item = styled.li`
  list-style: none;
  margin-top: 1rem; 
  padding: 1rem;
  border-bottom: 1px solid #ccc;
  .user {
    display: flex;
    align-items: center;
  }
  .user-icon {
    margin-right: 0.5rem;
    font-size: 1.2rem;
  }
  .cmt-content {
    font-size: 0.9rem;
    margin-top: 1rem;
  }
`