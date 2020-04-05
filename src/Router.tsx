import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SearchPage from '~/components/search/SearchPage';

import PageStatusProvider from '~/contexts/PageStatus';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/search"
          component={() => (
            <PageStatusProvider>
              <SearchPage />
            </PageStatusProvider>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
