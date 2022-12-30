import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    /* -webkit-font-smoothing: antialiased;
    appearance: none;
    border: 0px;
    box-sizing: border-box;
    font-weight: inherit; */
    margin: 0px;
    /* outline: 0px; */
    padding: 0px;
    /* text-rendering: optimizelegibility;
    text-size-adjust: 100%; */
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'DM Sans';
    /* height: 100%;
    width: 100%; */
  }

  h1, h2, h3, h4, h5, h6, p {
    font-family: 'DM Sans', sans-serif;
  }

  h1 {
    /* margin-block-end: 0.67em;
    margin-block-start: 0.67em; */
    /* margin-inline-end: 0px;
    margin-inline-start: 0px; */
    font-size: 4.8rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  h2 {
    font-size: 3.6rem;
    font-weight: 500;
  }

  h3 {
    font-size: 3.2rem;
    font-weight: 400;
  }

  h4, p {
    font-size: 2.6rem;
    font-weight: 400;
  }

  a {
    text-decoration: none;
  }

  & > a:link {
    text-decoration: none;
  }

  & > a:visited {
    text-decoration: none;
  }
`
