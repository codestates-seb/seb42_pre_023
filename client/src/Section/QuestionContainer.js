import React, { useState } from "react";
import Pagination from "react-js-pagination";
import QuestionCard from "./QuestionCard";
import styled from "styled-components";

const Container = styled.div`
  margin: 0;
  padding: 0;
`;

const Question = styled.div`
  display: flex;
  flex-direction: column;
`;

const PaginationBox = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 25px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #ecebee;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    background-color: white;
  }
  ul.pagination li:first-child {
    border-radius: 3px 0 0 3px;
  }
  ul.pagination li:last-child {
    border-radius: 0 3px 3px 0;
  }
  ul.pagination li a {
    text-decoration: none;
    color: #6a737c;
    font-size: 1.5rem;
  }
  ul.pagination li.active a {
    color: black;
  }
  ul.pagination li.active {
    background-color: #ffdbaf;
  }
  ul.pagination li:hover {
    background-color: rgb(247, 234, 222);
  }
  ul.pagination li a:hover,
  ul.pagination li a.active {
    color: black;
  }
`;

function QuestionContainer({ questionList }) {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState(15);

  const handlePageChange = (page) => {
    setPage(page);
  };

  console.log(questionList)

  return (
    <Container>
      <Question>
        {questionList ? questionList
          .slice(items * (page - 1), items * (page - 1) + items)
          .map((questions) => {
            return (
              <QuestionCard key={questions.boardId} questions={questions} />
            );
          }) : <></>}
      </Question>
      <PaginationBox>
        <Pagination
          activePage={page}
          itemsCountPerPage={items}
          totalItemsCount={300}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
        ></Pagination>
      </PaginationBox>
    </Container>
  );
}

export default QuestionContainer;
