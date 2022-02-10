import { createGlobalStyle } from 'styled-components';

import { backgroundPrimary, textPrimary } from './Colors';

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
    }

    body {
        background: ${backgroundPrimary};
        color: ${textPrimary};
        font-family: 'Barlow', sans-serif;
    }
`;
