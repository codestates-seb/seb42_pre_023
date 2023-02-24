import React, { useState } from "react";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";

export default function Signup() {
  const [signup, setSignup] = useState({
    memberName: "",
    memberEmail: "",
    memberPwd: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const handleInput = (key) => (e) => {
    setSignup({ ...signup, [key]: e.target.value });
  };

  const signupRequest = () => {
    if (
      (!signup.memberEmail || !signup.memberPwd || !signup.memberName) &&
      isUserValid !== true
    ) {
      setErrorMsg("유저명과 아이디, 비밀번호를 입력해주세요");
      return;
    } else if (isUserValid === false) {
      setErrorMsg("대소문자, 숫자를 포함한 8자 이상 작성해주세요");
      return;
    }
    return axios
      .post("/pre/signup", { signup })
      .then((res) => {
        setSignup("");
        setErrorMsg("");
      })
      .catch((err) => {
        setErrorMsg("회원가입에 실패했습니다.");
      });
  };

  const passwordRegex = /^[a-zA-Z0-9]{8,10}$/;
  const isUserValid = passwordRegex.test(signup.memberPwd);
  console.log(isUserValid);

  return (
    <LoginWrap>
      <Container>
        <div className="intro">
          <h1>Sign Up</h1>
          <p>
            By continuing, you are setting up a stack overflow account and agree
            to our <span className="link">User Agreement</span> and <br />{" "}
            <span className="link">Privacy Policy</span>.
          </p>
        </div>
        <Button margin="1rem 0 3rem 0" width="340px">
          <FcGoogle className="google-icon" />
          <span>Google 계정으로 계속하기</span>
        </Button>
        <Form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="display name"
            onChange={handleInput("memberName")}
          />
          <input
            type="email"
            placeholder="email"
            onChange={handleInput("memberEmail")}
          />
          <input
            type="password"
            placeholder="password"
            onChange={handleInput("memberPwd")}
          />
          {errorMsg ? <div className="error">{errorMsg}</div> : ""}
          <Button login="#ef8236" margin="2rem 0 0 0" onClick={signupRequest}>
            <span className="login">Sign up</span>
          </Button>
        </Form>
        <div className="text">
          Already Stack Overflow? <a href="/">Log In</a>
        </div>
      </Container>
    </LoginWrap>
  );
}

const LoginWrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  /* border: 1px solid #000; */
  width: 410px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  .intro > p {
    font-size: 1.5rem;
    margin-bottom: 3rem;
  }
  .text {
    margin: 1rem 0;
    font-size: 1.5rem;
  }
  .link {
    color: #4b89dc;
  }
`;

const Button = styled.button`
  width: ${(props) => (props.width ? props.width : "300px")};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 2rem;
  padding: 0.8rem;
  background-color: ${(props) => (props.login ? props.login : "transparent")};
  margin: ${(props) => (props.margin ? props.margin : "")};
  .google-icon {
    font-size: 2rem;
  }
  span {
    flex-grow: 2;
    text-align: center;
    font-size: 1.5rem;
  }
  .login {
    font-weight: bold;
    color: white;
  }
`;

const Form = styled.form`
  border: 1px solid #ccc;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  input {
    margin-bottom: 1rem;
    padding: 1rem;
    border-radius: 2rem;
    outline: none;
    border: none;
    background-color: #ffead8;
  }
  .error {
    font-size: 1.2rem;
    text-align: center;
    color: red;
  }
  .text {
    margin-bottom: 2rem;
    padding: 0 1rem;
  }
`;
