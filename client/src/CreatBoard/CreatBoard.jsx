import React from "react";
import styled from "styled-components";
import CBHead from "./CBHead";

const CreatBoardTemplate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

function CreatBoard(){
  return (
    <CreatBoardTemplate>
      <CBHead/>
    </CreatBoardTemplate>
  );
}

export default CreatBoard