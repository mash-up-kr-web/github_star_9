import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body { box-sizing: border-box } ;
`;

export default GlobalStyle;
