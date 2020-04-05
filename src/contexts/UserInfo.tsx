import React, { createContext, useState, useCallback } from 'react';

import { UserInfo } from '~/model';
import api from '~/utils/api';

interface UserInfoContextValue {
  userInfo?: UserInfo;
  searchUsefInfo: (username: string) => Promise<void>;
}

const initialContextValue = {
  userInfo: undefined,
  searchUsefInfo: async () => undefined,
};

export const UserInfoContext = createContext<UserInfoContextValue>(initialContextValue);

interface UserInfoProviderProps {
  initialUserInfo?: UserInfo;
}

const UserInfoProvider: React.FC<UserInfoProviderProps> = ({ children, initialUserInfo }) => {
  const [userInfo, setUserInfo] = useState<UserInfo | undefined>(initialUserInfo);

  const searchUsefInfo = useCallback(async (username: string) => {
    const result = await api.getUserInfo(username);
    setUserInfo(result);
  }, []);

  return <UserInfoContext.Provider value={{ userInfo, searchUsefInfo }}>{children}</UserInfoContext.Provider>;
};

export default UserInfoProvider;
