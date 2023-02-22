import React, { useState } from "react";
import styled from "styled-components";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function CommentCreate() {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventdefault();
    console.log(text);
    createCmt({
      borderId: "게시글 아이디",
      memberId: "현재 로그인 된 유저 아이디 정보 (로그인 안 되어 있으면 댓글 작성 X)",
      commentContent: { text },
    });
    setText("");
  };

  const createCmt = async (data) => {
    const res = await fetch("", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return await res.json();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="title">Your Answer</div>
      <CKEditor
        editor={ClassicEditor}
        onChange={(event, editor) => {
          const data = editor.getData();
          // console.log({ event, editor, data });
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
