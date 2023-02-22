import React from 'react';
import styled from "styled-components";

const BodyScreenDeployment = styled.div`
  position: relative;
  width: 83vw;
  top: 130px;
  left: 300px;
`

function BodyScreen({ children }) {
  return (
    <BodyScreenDeployment>{ children }</BodyScreenDeployment>
  );
}

export default BodyScreen;