import { createGlobalStyle } from 'styled-components';

import { backgroundPrimary, textPrimary } from './Colors';

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background: ${backgroundPrimary};
        color: ${textPrimary};
        font-family: 'Barlow', sans-serif;
    }

    button {
      border: none;
    }

    a {
      text-decoration: none;
    }
`;
