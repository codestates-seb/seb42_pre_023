import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {FaRegUserCircle} from "react-icons/fa";
import axios from "axios";

const getName = async () => {
    return axios.get('/DUMMYDATA/members.json')
}

export default function CommentItem({memberId, commentContent, createdAt}) {
  const [name, setName] = useState('');
  const date = new Date(createdAt).toLocaleString();

  useEffect(() => {
    getName().then((res) => res.data.filter((el) => el.memberId === memberId ? setName(el.memberName) : ''))
  })

  return (
    <Item>
      <div className="user">
        <div>
          <FaRegUserCircle className="user-icon" />
          <span className="user-name"><strong>{name}</strong></span>
        </div>
        <span className="date">{date}</span>
      </div>
      <div className="cmt-content"><p>{commentContent}</p></div>
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
    justify-content: space-between;
    align-items: center;
    .user-icon {
      margin-right: 0.5rem;
      font-size: 2rem;
    }
    .date {
      font-size: 1.2rem;
    }
  }
  .cmt-content {
    margin-top: 1rem;
    padding-left: 0.5rem;
  }
`