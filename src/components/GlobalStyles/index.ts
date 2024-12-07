import { createGlobalStyle } from 'styled-components'

import GlutenFont from '@/fonts/Gluten-VariableFont-wght.ttf'

export const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Gluten';
  src: url(${GlutenFont}) format('ttf');
}

 #root {
  height: 100vh;
}

body {
  margin: 0;
  font-family: Gluten, cursive;
  font-size: 14px;
}

input, textarea, button {
  font-family: inherit;
}

* {
    box-sizing: border-box;
}
`
