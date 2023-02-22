import React from 'react';
import styled from "styled-components";

const BodyScreenDeployment = styled.div`
  display: flex;
`

function BodyScreen({ children }) {
  return (
    <BodyScreenDeployment>{ children }</BodyScreenDeployment>
  );
}

export default BodyScreen;