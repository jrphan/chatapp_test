import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5% !important; 
  }

  body {
    font-family: Arial, sans-serif;
    font-size: 1.6rem; 
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.3s ease-in-out;
    overflow: hidden;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.text};
  }
`;
