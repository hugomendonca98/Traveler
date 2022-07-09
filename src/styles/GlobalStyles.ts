import styled, { createGlobalStyle } from 'styled-components';

import { colors } from './Colors';

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;

    }

    body {
        background: ${colors.background.primary};
        color: ${colors.text.primary};
        font-family: 'Barlow', sans-serif;
    }

    button {
      border: none;
    }

    a {
      text-decoration: none;
    }

    .bar-of-progress {
      z-index: 50;
    }
`;

export const Container = styled.div`
  width: 1140px;
  margin: auto;

  @media screen and (max-width: 1200px) {
    width: 1025px;
  }

  @media screen and (max-width: 1024px) {
    width: 769px;
  }

  @media screen and (max-width: 768px) {
    width: 481px;
  }

  @media screen and (max-width: 480px) {
    width: 320px;
  }
`;
