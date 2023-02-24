import React,{ useState,useEffect } from 'react';
import styled from 'styled-components';
import QuestionCard from './QuestionCard'
import axios from 'axios';

export default function QuestionList() {
  const getQList = async () => {
    return axios.get("/DUMMYDATA/boards.json");
  };
  const [questionList, setquestionList] = useState([]);

  useEffect(() => {
    getQList().then((res) => setquestionList(res.data));
  }, []);
  


//ask question 로그인 여부 navigate

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

  //질문목록
  // const getQustionList = async () =>{
    
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
  <HeadContainer>
    <H1>
      <h1>All Questions</h1>
      <AskQButton>Ask Question</AskQButton> 
      </H1>
    <H2>
      <QCount>{questionList.length} questions</QCount>  
      <FilterWrap>
      <Button>Views</Button>
      <Button>Views</Button>
      <Button>Newest</Button>
      <Button>Oldest</Button>
  </FilterWrap>
  </H2>
  </HeadContainer>

  <QuestionContainer>
    <Question >
    {questionList.map((questions)=>{
      return(
        <QuestionCard questions={questions} key={questions.boardId}/>
      )
    })}
    </Question>
  </QuestionContainer>

  </>
)
}
const HeadContainer = styled.div`
border-bottom: 1px solid gray;
width: calc(100% - 164px);
height: 15vh;
padding: 15px;
box-sizing: border-box;
h1{
font-size:35px;
margin-right:12px;
margin-bottom:12px;
/* flex: 1 1 auto; */
padding-left:10px ;
}
`


const H1= styled.div`
padding: 10px;
display: flex;
justify-content: space-between;
align-items: center;
`;
const H2= styled.div`
padding: 20px;
display: flex;
justify-content: space-between;
align-items: center;
`;

const QCount = styled.div`
font-size:25px;
padding-left: 20px;
`;

const AskQButton = styled.button`
background-color: #0a95ff;
border: 1px;
color : white;
font-size:13px;
padding: 10.4px;
width:103px;
cursor:pointer;
&:hover{
background-color:rgb(0 116 204);
}

`
const FilterWrap =styled.div`
display: flex;
justify-content: center;
align-items: center;

`

const Button = styled.button`
font-size:12px;
padding: 9px;
cursor: pointer;
background: white;
color: #6A737C;
border: 1px solid #6A737C;
border-radius:3px;
`



const QuestionContainer = styled.ul`
margin: 0;
padding: 0;
width:calc(100% - 164px);
height: 100%;

`;

const Question = styled.li`
display: flex;
flex-direction: column;
overflow: hidden;

`;