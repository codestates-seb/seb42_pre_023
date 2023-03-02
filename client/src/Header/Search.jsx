import React, { useState } from "react";
import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";
import { ImCancelCircle } from "react-icons/im";

const SearchInput = styled.div`
  flex: 7;
  div{
    line-height: normal;
    padding: 1rem;
    border: none;
    background-color: #f5f5f5;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 1px 2px, rgba(0, 0, 0, 0.3) 0px 3px 5px -1px, rgba(0, 0, 0, 0.2) 0px -2px 0px inset;
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
    margin-right: 20px;
    background-color: #f5f5f5;
    outline: none;
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
  span{
    cursor: pointer;
  }
`;


function Search() {
  const [search, setSearch] = useState("");

  const onChange = (e) => setSearch(e.target.value);
  const deleteSearch = (e) => setSearch("");

  return(
    <SearchInput>
      <div>
        <span>
          <BiSearchAlt size={25}></BiSearchAlt>
        </span>
        <input 
          type="text" 
          placeholder="Search StackoverFlow..."
          value={search}
          onChange={onChange}
        />
        <span>
          <ImCancelCircle size={25} color="#ff5656" onClick={deleteSearch}></ImCancelCircle>
        </span>
      </div>
    </SearchInput>
  )
}

export default Search