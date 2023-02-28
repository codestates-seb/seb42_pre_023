import React, { } from "react";
import styled from "styled-components";
import MyQuestion from "./MyQuestion"
import UserProfile from "./UserProfile"

const UserInfoBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const BodyScreenDeployment = styled.div`
  position: relative;
  width: 83vw;
  top: 130px;
  left: 300px;
`

function UserInfo({isLogin, setIsLogin}) {

  return (
    <BodyScreenDeployment>
      <UserInfoBackground>
        <UserProfile isLogin={isLogin} setIsLogin={setIsLogin}/>
        <MyQuestion/>
      </UserInfoBackground>
    </BodyScreenDeployment>
  );
}

export default UserInfo