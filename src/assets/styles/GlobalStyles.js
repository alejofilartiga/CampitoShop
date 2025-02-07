import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

/* *{
  border: 1px solid red;   

} */

  *{
    
          font-weight: 100;


  }

  html{
    scroll-behavior: smooth;
    font-family: "Lilita One", sans-serif;

  }

    body {
    margin: 0;
    padding: 0;
    font-family: "Lilita One", serif;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden;
    }

    a {
    text-decoration: none;
    color: white;
    }

    a:visited {
    color: white;
    }

    li {
    list-style: none;
    }

`;