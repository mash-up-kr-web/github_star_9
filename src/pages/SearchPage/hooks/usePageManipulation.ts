import { useState, useEffect, useMemo } from 'react';

import { PageStatus } from '~/contexts/PageStatus';
import useQuery from '~/hooks/useQuery';

const usePageManipulation = (pageStatus: PageStatus) => {
  const queryString = useQuery();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const startFromTop = useMemo(() => queryString.has('username'), []);

  const [moveTop, setMoveTop] = useState<boolean>(pageStatus !== PageStatus.Initial);

  const checkScrolledToTop = () => {
    if (!moveTop) {
      setMoveTop(true);
    }
  };

  useEffect(() => {
    setMoveTop(pageStatus !== PageStatus.Initial);
  }, [pageStatus]);

  return { queryString, moveTop, startFromTop, checkScrolledToTop };
};

export default usePageManipulation;
