import React from 'react';
import { createGlobalStyle } from 'styled-components';
//! App.js는 항상 이 상태로 형식을 유지할 것.
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
//! App.js는 항상 이 상태로 형식을 유지할 것.
function App() {
  return (
    <>
      <GlobalStyle/>
    </>
  );
}
//! App.js는 항상 이 상태로 형식을 유지할 것.
export default App;
