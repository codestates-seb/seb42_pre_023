import React, { useState } from "react";
import styled from "styled-components";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function CommentCreate({userInfo}) {
  const { board } = useParams();
  const [text, setText] = useState("");
  
  const createCmt = async (data) => {
    return axios.post("/api/pre/comments", data)
    .then((res) => console.log(res.data))
  }

  const handleSubmit = (e) => {
    e.preventdefault();
    console.log(text);
    createCmt({
      borderId: board,
      memberId: userInfo.memberId,
      commentContent: { text },
    });
    setText("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="title">Your Answer</div>
      <CKEditor
        editor={ClassicEditor}
        onChange={(event, editor) => {
          const data = editor.getData();
          // console.log({ event, editor, data });
          // console.log(data)
          setText(data);
        }}
      />
      <Button>Post Your Answer</Button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  .title {
    padding-bottom: 1rem;
    font-weight: bold;
  }
`;

const Button = styled.button`
  width: 150px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #4b89dc;
  color: white;
  padding: 1rem;
  margin-top: 1rem;
  &:hover {
    background-color: #2f79da;
  }
`;
