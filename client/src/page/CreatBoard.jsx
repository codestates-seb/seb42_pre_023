import React from "react";
import styled from "styled-components";
import CBHead from "../CreatBoard/CBHead";

const CreatBoardTemplate = styled.div`
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

function CreatBoard({ memberId }){
  return (
    <BodyScreenDeployment>
      <CreatBoardTemplate>
        <CBHead memberId={ memberId }/>
      </CreatBoardTemplate>
    </BodyScreenDeployment>
  );
}

export default CreatBoard