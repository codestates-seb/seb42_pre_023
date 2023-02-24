import React from 'react';
import styled from "styled-components";
import UserInfo from "./Userinfo/UserInfo"
import CreatBoard from "./CreatBoard/CreatBoard"

const BodyScreenDeployment = styled.div`
  position: relative;
  width: 83vw;
  top: 130px;
  left: 300px;
`

function BodyScreen() {
  return (
    <BodyScreenDeployment>
      <UserInfo/>
      {/* <CreatBoard/> */}
    </BodyScreenDeployment>
  );
}

export default BodyScreen;