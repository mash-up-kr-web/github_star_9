import { Provider } from 'mobx-react';
import React from 'react';

import Main from './containers/Main';
import stores from './stores';

const Root: React.FC = () => (
  <Provider store={stores}>
    <Main />
  </Provider>
);

export default Root;
