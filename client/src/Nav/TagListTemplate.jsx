import React from "react";
import styled from "styled-components";

const TagListBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  height: 80%;
`;

function TagListTemplate({ children }) {
  return (
    <TagListBackground>{ children }</TagListBackground>
  );
}

export default TagListTemplate;