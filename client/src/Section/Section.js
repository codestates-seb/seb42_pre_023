import React from 'react';
import styled from 'styled-components';
import QuestionList from './QuestionList'

export default function Section() {

  
    return(
    <>
    <BodyScreenDeployment>
    <SectionContainer>
        <QuestionList />
    </SectionContainer>
    </BodyScreenDeployment>
    </>
  
    )
};


const SectionContainer = styled.section`
  max-width: 1100px;
  width: calc(100%-250px);
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;


`;


const BodyScreenDeployment = styled.div`
  position: relative;
  width: 83vw;
  top: 130px;
  left: 300px;
`