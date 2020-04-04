import { Provider } from 'mobx-react';
import React from 'react';

import App from './containers/App';
import stores from './stores';

const Root: React.FC = () => (
  <Provider store={stores}>
    <App />
  </Provider>
);

export default Root;
