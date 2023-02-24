import React from 'react';
import styled from 'styled-components';
import QuestionList from './QuestionList'

export default function Section({tagInfo}) {

  
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
`


const BodyScreenDeployment = styled.div`
  position: relative;
  width: 83vw;
  top: 130px;
  left: 300px;
`