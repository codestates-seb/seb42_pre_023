import React from "react";
import styled from "styled-components";
import MyQuestion from "./MyQuestion"
import UserProfile from "./UserProfile"

const UserInfoBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

function UserInfo() {
  return (
    <UserInfoBackground>
      <UserProfile/>
      <MyQuestion/>
    </UserInfoBackground>
  );
}

export default UserInfo