import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SearchPage from '~/components/search/SearchPage';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/search" component={SearchPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
