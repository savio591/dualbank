import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --blue-dark: #363F5F;
    --blue: #172765;
    --shape: #FFFFFF;
    --purple: #622EE5;
    --divider: #E5E4E2;
    --cashAvailable: #69D531;
    --barBackground: #f9f9f9;

    --boxShadow-bottonOnly: 0px 2px 4px -2px rgb(0 0 0 / 25%);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    @media (max-width: 1080px) {
        font-size: 93.75%
    }

    @media (max-width: 720px) {
        font-size: 87.5%
    }
}


body {
    background: var(--shape);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
     text-shadow: 1px 1px 1px rgba(0,0,0,0.004);
    width: 100%;
    height: 100%;
}

body, input, textarea, button {
	font-family: 'Lato', sans-serif;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: normal;
}

button {
    cursor: pointer;
}

img {
  display: block;
}

[disabled] {
    opacity: 0.6;
    cursor: default
}


/* width */
::-webkit-scrollbar {
  width: 12px;
  height: 1rem;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent; 
  
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  border-radius: 0.75rem;
  background: #C8C6C4; 
  border: 4px white solid;   
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #a9a9a9; 
}
`;
