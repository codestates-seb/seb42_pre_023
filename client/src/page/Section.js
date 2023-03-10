import React from "react";
import styled from "styled-components";
import QuestionList from "../Section/QuestionList";
export default function Section({ tagInfo }) {
  return (
    <>
      <BodyScreenDeployment>
        <SectionContainer>
          <QuestionList tagInfo={tagInfo} />
        </SectionContainer>
      </BodyScreenDeployment>
    </>
  );
}

const BodyScreenDeployment = styled.div`
  position: relative;
  width: 83vw;
  top: 130px;
  left: 300px;
`;

const SectionContainer = styled.section``;
