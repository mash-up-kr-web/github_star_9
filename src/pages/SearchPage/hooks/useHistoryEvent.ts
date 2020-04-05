import { useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { PageStatus } from '~/contexts/PageStatus';

const useHistoryEvent = (
  search: (username: string) => Promise<void>,
  chagePageStatus: (status: PageStatus) => void,
) => {
  const history = useHistory();

  const historyPushForSearchUserInfo = useCallback(
    (username: string) => {
      history.push(`?username=${username}`);
    },
    [history],
  );

  useEffect(() => {
    history.listen((location) => {
      const username = new URLSearchParams(location.search).get('username');

      if (username) search(username);
      else {
        chagePageStatus(PageStatus.Initial);
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return historyPushForSearchUserInfo;
};

export default useHistoryEvent;
