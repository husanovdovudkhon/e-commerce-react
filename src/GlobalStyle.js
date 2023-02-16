import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-family: "Montserrat", sans-serif;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  html body {
    //background-color: #f6f7ff;
  }

  :root {
    --color-black: rgb(37, 43, 66);
    --color-white: white;
    --color-blue: rgb(32, 145, 249);
    --color-grey: #f4f5f5
  }

  .container {
    max-width: 1240px;
    min-width: 320px;
    margin: 0 auto;
    padding: 0 15px;
  }
  
  a.active{
    font-weight: 700;
  }
`

export default GlobalStyles