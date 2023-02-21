import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './Header/Header';

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
    <>
      <GlobalStyle/>
    </>
  );
}

export default App;
