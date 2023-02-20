<<<<<<< HEAD
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './Header/Header';
=======
import React from "react";
import {createGlobalStyle} from "styled-components";
>>>>>>> cbbb2add4a112f7b2825b604ffdbc495acbbb7d3

const GlobalStyle = createGlobalStyle`
  /* reset CSS */
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.6rem;
    line-height: 1.6;
  }
  li {
    list-style: none;
  }
`;

function App() {

  return (
<<<<<<< HEAD
    <>
      <GlobalStyle/>
      <Header/>
    </>
=======
    <div>test</div>
>>>>>>> cbbb2add4a112f7b2825b604ffdbc495acbbb7d3
  );
}

export default App;
