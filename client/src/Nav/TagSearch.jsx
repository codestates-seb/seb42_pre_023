import React, { useState } from "react";
import styled from "styled-components";
import { BsTags } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";

const TagSearchInput = styled.div`
  width: 90%;
  margin-bottom: 10px;
  div{
    line-height: normal;
    padding: 1rem;
    border: none;
    background-color: #f5f5f5;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex: 4;
  }
  input{
    height: 100%;
    width: 100%;
    padding: 1rem;
    font-size: 1.7rem;
    border: none;
    margin-left: 10px;
    margin-right: 10px;
    background-color: #f5f5f5;
    outline: none;
  }
  span{
    cursor: pointer;
  }
  input:focus{
    background-color: #ffffff;
  }
  div:hover > input, div:hover {
    background-color: #ffffff;
  }
  div:focus-within {
    background-color: #ffffff;
  }
`;


function TagSearch() {
  const [tagSearch, setTagSearch] = useState("");

  const onChange = (e) => setTagSearch(e.target.value);
  const deleteTagSearch = (e) => setTagSearch("");

  return(
    <TagSearchInput>
      <div>
        <span>
          <BsTags size={25}></BsTags>
        </span>
        <input 
          type="text" 
          placeholder="Search"
          value={tagSearch}
          onChange={onChange}
        />
        <span onClick={deleteTagSearch}>
          <ImCancelCircle size={25} color="#ff5656"></ImCancelCircle>
        </span>
      </div>
    </TagSearchInput>
  )
}

export default TagSearch