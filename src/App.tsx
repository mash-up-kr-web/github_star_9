import React from 'react';

import GlobalStyle from './GlobalStyle';
import Router from './Router';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;
