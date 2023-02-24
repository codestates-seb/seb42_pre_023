import React,{ useState }from "react";
import styled from "styled-components";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Link } from "react-router-dom";

function CBHead() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");

  const titleOnChange = (e) => {
    setTitle(e.target.value);
  }
  const tagOnChange = (e) => {
    setTag(e.target.value);
  }

  const discardDraft = () => {
    setTitle("");
    setContent("");
    setTag("");
  }

  const handleSubmit = (e) => {
    window.scrollTo(0,0);
    // UserID에 추가하기
  }

  return (
    <CBHeadTemplate>
      <h1>Ask a public question 📝</h1>
      <div className="question_tip">
        <h2>Writing a good question</h2>
        <ul>
          <li>Summarize your problem in a one-line title.</li>
          <li>Describe your problem in more detail.</li>
          <li>Describe what you tried and what you expected to happen.</li>
          <li>Add “tags” which help surface your question to members of the community.</li>
          <li>Review your question and post it to the site.</li>
        </ul>
      </div>
      <div className="categoryTemplate">
        <h3>Title</h3>
        <span>Be specific and imagine you’re asking a question to another person.</span>
        <input 
          type="text" 
          placeholder="ex) Asking for input until desired result, then returning result"
          value={title}
          onChange={titleOnChange}
        />
      </div>
      <div className="categoryTemplate">
        <h3>What are the details of your problem?</h3>
        <span>Introduce the problem and expand on what you put in the title. Minimum 20 characters.</span>
        <CKEditor
          editor={ClassicEditor}
          data={content}
          onChange={(event, editor) => {
            setContent(editor.getData());
          }}
        />
      </div>
      <div className="categoryTemplate">
        <h3>Tags</h3>
        <span>Add up to 5 tags to describe what your question is about. Start typing to see suggestions.</span>
        <input 
          type="text" 
          value={tag} 
          placeholder="Enter the desired tag"
          onChange={tagOnChange}
        />
      </div>
      <div className="clickButton">
        <button className="discard" onClick={discardDraft}>Discard draft</button>
        <Link to="/">
          <button className="submit" onClick={handleSubmit}>Submit</button>
        </Link>
      </div>
    </CBHeadTemplate>
  );
}

const CBHeadTemplate = styled.div`
  flex-direction: column;
  height: 50px;
  h1{
    font-size: 40px;
    margin-bottom: 30px;
  }
  h2{
    font-size: 30px;
    color: #c27e00;
    margin-bottom: 20px;
  }
  h3{
    font-size: 20px;
  }
  li{
    list-style: circle;
  }
  .question_tip{
    padding: 20px 40px;
    display: inline-block;
    border-radius: 10px;
    background: #fff1d8;
    border: 2px solid #b8b8b8;
    margin-bottom: 50px;
  }
  .categoryTemplate{
    display: block;
    width: 80%;
    border: 1px solid #b8b8b8;
    background: #ffffff;
    padding: 10px 30px;
    margin-bottom: 50px;
  }
  .categoryTemplate > span{
    display: block;
    margin-bottom: 10px;
  }
  .categoryTemplate > input{
    display: block;
    width: 100%;
    height: 30px;
    font-size: 16px;
    padding: 0 10px;
  }
  .clickButton{
    display: flex;
    justify-content: flex-end;
    margin-right: 318px;
  }
  button{
    font-size: 20px;
    display: inline-block;
    margin: -10px 0px 50px 30px;
    text-align: center;
    color: #FFF;
    border-radius: 10px;
    transition: all 0.2s;
    box-shadow: 0px 0px 0px 0px #A66615;
    border: none;
    cursor: pointer;
  }
  .discard{
    background: #ff3838;
    padding: 5px 20px;
  }
  .discard:hover{
    box-shadow: 0px 0px 5px 5px #701010;
  }
  .submit{
    background: #1667ff;
    padding: 10px 50px;
  }
  .submit:hover {
    box-shadow: 0px 0px 5px 5px #002b7a;
  }
`

export default CBHead