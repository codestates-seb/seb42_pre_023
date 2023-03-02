import React, { } from "react";
import styled from "styled-components";
import MyQuestion from "../Userinfo/MyQuestion"
import UserProfile from "../Userinfo/UserProfile"

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

function UserInfo({isLogin, setIsLogin, userInfo}) {

  return (
    <BodyScreenDeployment>
      <UserInfoBackground>
        <UserProfile isLogin={isLogin} setIsLogin={setIsLogin} userInfo={userInfo} />
        <MyQuestion/>
      </UserInfoBackground>
    </BodyScreenDeployment>
  );
}

export default UserInfo