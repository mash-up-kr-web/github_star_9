import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SearchPage from '~/pages/SearchPage';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SearchPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
