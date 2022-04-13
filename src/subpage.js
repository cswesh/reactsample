import { createGlobalStyle } from 'styled-components'

export const SubPage = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    display: flex;
    justify-content: center;
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    height: 100vh;
    text-rendering: optimizeLegibility;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  h1 {
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
  }

 

  img {
    border-radius: 5px;
    height: auto;
    width: 10rem;
  }

  div {
    text-align: center;
  }

 
  grid-container {
    display: grid;
    gap: 10px;
    background-color: #2196F3;
    padding: 10px;
  }
  grid-item {
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding: 20px;
    font-size: 30px;
  }
  item1 {
    grid-column: 1 / span 2;
    grid-row: 1;
  }
  item2 {
    grid-column: 3;
    grid-row: 1 / span 2;
  }
  item5 {
    grid-column: 1 / span 3;
    grid-row: 3;
  }  
  small {
    display: block;
  }

  a {
    color: ${({ theme }) => theme.primaryHover};
    text-decoration: none;
  }
`
