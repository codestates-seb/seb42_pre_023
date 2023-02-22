import React from 'react';
import styled from 'styled-components';

const Sectionwrap = styled.section`
`
const SHead = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`;

const QCount = styled.div`
  padding-left: 20px;
`;

const AskQButton = styled.button`
    background-color: rgb(18,126,254);
    color : white;
    `
const FilterWrap =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    `

const ViewsButton = styled.button``
const NewestButton = styled.button``
const OldestButton = styled.button``

export default function Section() {
    return(
        
        <Sectionwrap>
        <SHead>
            <h1>All Questions</h1>
            <AskQButton>Ask Question</AskQButton>
        </SHead>
        <QCount> questions</QCount>
             <FilterWrap>
               <ViewsButton>Views</ViewsButton>
               <NewestButton>Newest</NewestButton>
               <OldestButton>Oldest</OldestButton>
            </FilterWrap>
            </Sectionwrap>
            

       
    )
};

