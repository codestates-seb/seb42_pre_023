import React, { useState } from "react";
import styled from "styled-components";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function CommentCreate({ userInfo }) {
  const { memberId } = userInfo;
  const { board } = useParams();
  const [text, setText] = useState("");

  // const createCmt = async () => {
  //   return axios
  //     .post("/api/pre/comments", {
  //       borderId: board,
  //       memberId,
  //       commentContent: text,
  //     })
  // };
  const createCmt = async () => {
    const res = await fetch("/api/pre/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        borderId: board,
        memberId,
        commentContent: text,
      }),
    });
    return res.json()
  };

  // const cmtRequest = () => {
  //   if (userInfo !== {}) {
  //     return fetch("/api/pre/comments", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         borderId: board,
  //         memberId,
  //         commentContent: text,
  //       }),
  //     })
  //     .then((res) => {
  //       console.log(res)
  //     })
  //     .catch((err) => console.log(err))
  //   } else {
  //     alert("로그인 후 이용해주세요.")
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInfo !== {}) {
      createCmt().then((res) => console.log(res));
      setText("");
      window.location.reload();
    } else {
      alert("로그인 후 이용해주세요.");
    }
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
  padding-top: 2rem;
  border-top: 1px solid #ccc;
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
