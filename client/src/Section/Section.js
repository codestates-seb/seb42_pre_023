import React from 'react';
import styled from 'styled-components';

export default function Section() {
//   const [boards, setBoards] = useState([]);
//   const navigate = useNavigate();

//   //필터
//   const handleQClick = () => {};
//   const handleOldest = ()=>  {
      //   let newArr = [...boards];
      //   let newestArr = newArr.sort((a,b)) =>{
      //     return a.BoardId-b.boardId;
      //   };
      //   setBoards(newestArr)
      // };

//   const handleNewest = ()=>{
      //   let newArr = [...boards];
      //   let newestArr = newArr.sort((a,b)) =>{
      //     return b.BoardId-a.boardId;
      //   };
      //   setBoards(newestArr)
      // };
// };

//   //질문목록
//   const getBoardList = async () =>{
    
//   }
//   //조회수 
//   const updateView = async (data) => {
//     const response = await fetch('', {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({data})
//       })
//     return await response.json();
// }
  
    return(
      <>
      <SectionContainer>
        <SectionHeder>
          <SH1>
            <h1>All Questions</h1>
            <AskQButton>Ask Question</AskQButton> 
            </SH1>
          <SH2>
            <QCount>{} questions</QCount>  
            <FilterWrap>
            <ViewsButton>Views</ViewsButton>
            <NewestButton>Newest</NewestButton>
            <OldestButton>Oldest</OldestButton>
        </FilterWrap>
          </SH2>
        </SectionHeder>
        <QContainer>
          <Question>

          </Question>
        </QContainer>
      </SectionContainer>
    </>
  
    )
};


const SectionContainer = styled.section`
  width: 100vw;
  height: 90vh;
  border-left: 2px solid #bbbbbb;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #f7f7f7;
  margin-top: 9rem;
  /* position: relative;
  top:10vh;
  left:12vw; */
`;

const SectionHeder = styled.div`
  border: 3px solid gray;
  width:100%;
  height: 100vh;
  border-radius: 0;
  border-top-width: 0;
  border-bottom-width: 0;
  border-left-width: 1px;
  border-right-width: 0;
  padding:25px;
  box-sizing: border-box;
`


const SH1= styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const SH2= styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
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

const QContainer = styled.ul`
  margin: 0;
  padding: 0;
`;

const Question = styled.li`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;