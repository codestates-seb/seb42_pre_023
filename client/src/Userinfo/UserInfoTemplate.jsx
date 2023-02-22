import React from "react";
import styled from "styled-components";

const UserInfoBackground = styled.div`
  width: 100%;
  padding: 20px;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

function UserInfoTemplate({ children }) {
  return (
    <UserInfoBackground>{ children }</UserInfoBackground>
  );
}

export default UserInfoTemplate