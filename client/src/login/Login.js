import React from "react";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  return (
    <LoginWrap>
      <Container>
        <div className="intro">
          <h1>Log In</h1>
          <p>
            By continuing, you agree to our <span className="link">User Agreement</span> <br />
            and <span className="link"> Privacy Policy</span>.
          </p>
        </div>
        <Button margin="1rem 0 2rem 0" width="370px">
          <FcGoogle className="google-icon" />
          <span>Google 계정으로 계속하기</span>
        </Button>
        <Input>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <div className="text">
            Forget your <span className="link">email</span> or <span className="link">password</span> ?
          </div>
          <Button login="#ef8236">
            <span className="login">Log in</span>
          </Button>
        </Input>
        <div className="text">
          New to Stack Overflow? Sign up
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
  width: 400px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  .text {
    margin: 1rem 0;
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
    font-size: 1.5rem;
  }
  span {
    flex-grow: 2;
    text-align: center;
    font-size: 1rem;
  }
  .login {
    font-weight: bold;
    color: white;
  }
`;

const Input = styled.div`
  border: 1px solid #ccc;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  input {
    &:nth-child(1) {
      margin-bottom: 1rem;
    }
    padding: 1rem;
    border-radius: 2rem;
    outline: none;
    border: none;
    background-color: #ffead8;
  }
  .text {
    margin-bottom: 2rem;
    padding: 0 1rem;
  }
`;