import React from "react";
import styled from "styled-components";
import MyQuestion from "./MyQuestion"
import UserProfile from "./UserProfile"

const UserInfoBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

function UserInfoTemplate() {
  return (
    <UserInfoBackground>
      <UserProfile/>
      <MyQuestion/>
    </UserInfoBackground>
  );
}

export default UserInfoTemplate