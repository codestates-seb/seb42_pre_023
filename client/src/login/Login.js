import React, { useState } from "react";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";

export default function Login({ setIsLogin }) {
  const navigate = useNavigate();
  const [idInfo, setIdInfo] = useState("");
  const [pwInfo, setPwInfo] = useState("");
  const [keepLogin, setKeepLogin] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleIdInput = (e) => {
    setIdInfo(e.target.value);
  };
  const handlePwInput = (e) => {
    setPwInfo(e.target.value);
  };

  const loginRequest = () => {
    if (!idInfo || !pwInfo) {
      setErrorMsg("아이디와 비밀번호를 입력해주세요");
      return;
    }

    // console.log({ username: idInfo, password: pwInfo });
    return fetch("/api/pre/login", {
      method: "POST",
      body: JSON.stringify({
        username: idInfo,
        password: pwInfo,
      }),
    })
      .then((res) => {
        localStorage.setItem('token', res.headers.get('authorization'));
        sessionStorage.setItem('login', true);
        sessionStorage.setItem('id', idInfo)
        setIsLogin(true);
        setErrorMsg("");
        navigate('/');
      })
      .catch((error) => {
        // console.log(error);
        setErrorMsg("로그인에 실패했습니다.");
      });
  };
  const oauthRequest = () => {
    return window.location.assign("구글 주소");
  };

  return (
    <LoginWrap>
      <Container>
        <div className="intro">
          <h1>Log In</h1>
          <p>
            By continuing, you agree to our
            <span className="link">User Agreement</span> <br />
            and <span className="link"> Privacy Policy</span>.
          </p>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <Button margin="1rem 0 3rem 0" width="340px" onClick={oauthRequest}>
            <FcGoogle className="google-icon" />
            <span>Google 계정으로 계속하기</span>
          </Button>
        </form>
        <Form onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="email"
            onChange={handleIdInput} //handleInput("username")
          />
          <input
            type="password"
            placeholder="password"
            onChange={handlePwInput} // handleInput("password")
          />
          {errorMsg ? <div className="error">{errorMsg}</div> : ""}
          <label className="checked-login">
            <input type="checkbox" onChange={() => setKeepLogin(!keepLogin)} />
            <p>로그인 상태 유지하기</p>
          </label>
          <div className="text">
            Forget your <span className="link">email</span> or{" "}
            <span className="link">password</span> ?
          </div>
          <Button login="#ef8236" type="submit" onClick={loginRequest}>
            <span className="login">Log in</span>
          </Button>
        </Form>
        <div className="text">
          New to Stack Overflow? <Link to="/signup">Sign up</Link>
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
    &:nth-child(1) {
      margin-bottom: 1rem;
    }
    padding: 1rem;
    border-radius: 2rem;
    outline: none;
    border: none;
    background-color: #ffead8;
  }
  .error {
    font-size: 1.2rem;
    text-align: center;
    margin-top: 0.5rem;
    color: red;
  }
  .text {
    margin-bottom: 2rem;
    padding: 0 1rem;
  }
  .checked-login {
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    margin-top: 1rem;
    padding-left: 1rem;
    input {
      margin-top: 1rem;
      margin-right: 0.5rem;
    }
  }
`;
