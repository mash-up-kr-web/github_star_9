import React, { createContext, useState } from 'react';

export enum PageStatus {
  Initial = 'initial',
  Fetched = 'fetched',
  Loading = 'loading',
  Error = 'error',
}

interface PageStatusContextValue {
  pageStatus: PageStatus;
  chagePageStatus: (status: PageStatus) => void;
}

const initialContextValue = { pageStatus: PageStatus.Initial, chagePageStatus: () => undefined };

export const PageStatusContext = createContext<PageStatusContextValue>(initialContextValue);

const PageStatusProvider: React.FC = ({ children }) => {
  const [status, setStatus] = useState<PageStatus>(PageStatus.Initial);

  const chagePageStatus = (nextStatus: PageStatus) => {
    setStatus(nextStatus);
  };

  return (
    <PageStatusContext.Provider value={{ pageStatus: status, chagePageStatus }}>{children}</PageStatusContext.Provider>
  );
};

export default PageStatusProvider;
