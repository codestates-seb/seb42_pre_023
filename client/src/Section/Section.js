import React from 'react';
import styled from 'styled-components';
import QuestionList from './QuestionList'

export default function Section() {

  
    return(
    <>
    <SectionContainer>
        <QuestionList />
    </SectionContainer>
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

