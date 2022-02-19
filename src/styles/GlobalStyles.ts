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
`;

export const Container = styled.div`
  width: 1140px;
  margin: auto;
`;
