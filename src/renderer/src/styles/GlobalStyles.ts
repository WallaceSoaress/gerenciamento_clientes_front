import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    color-scheme: dark;
  }

  html,
  body,
  #root {
    min-height: 100%;
  }

  body {
    margin: 0;
    background:
      radial-gradient(circle at top left, rgba(56, 189, 248, 0.08), transparent 24%),
      radial-gradient(circle at bottom right, rgba(14, 165, 233, 0.08), transparent 22%),
      ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family:
      "Segoe UI Variable",
      "Segoe UI",
      "Trebuchet MS",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  * {
    box-sizing: border-box;
  }

  *::selection {
    background: rgba(125, 211, 252, 0.28);
  }

  a,
  button,
  input,
  textarea {
    font: inherit;
  }

  button {
    cursor: pointer;
  }

  p,
  h1,
  h2,
  h3 {
    margin: 0;
  }
`
