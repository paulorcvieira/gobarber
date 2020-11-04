import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-background: #312E38;
    --color-button-text: #312E38;
    --color-input: #232129;
    --color-input-text: #F4EDE8;
    --color-input-placeholder: #666360;
    --color-error: #C53030;
    --box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

    --color-toast-default: #EBF8FF;
    --color-toast-default-text: #3172B7;
    --color-toast-success: #E6FFFA;
    --color-toast-success-text: #2E656A;
    --color-toast-error: #FDDEDE;
    --color-toast-error-text: #C53030;

    --color-white-600: #C3BDB9;
    --color-white-700: #F4EDE8;
    --color-white-900: #FFFFFF;
    --color-orange-400: #CC7300;
    --color-orange-500: #FF9000;
    --color-gray-100: #232129;
    --color-gray-200: #28262E;
    --color-gray-300: #312E38;
    --color-gray-400: #3E3B47;
    --color-gray-500: #666360;
    --color-gray-600: #999591;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: var(--color-background);
    color: var(--color-white-900);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 1rem;
    border: 0;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    border: 0;
    cursor: pointer;
  }
`;
