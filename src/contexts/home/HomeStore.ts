import { useState, useCallback } from "react";

const useHomeStore = () => {
  const [username, setUsername] = useState("");

  const onRepoSearch = useCallback(() => {
    console.log(username);
  }, [username]);

  return {
    username,
    setUsername,
    onRepoSearch,
  };
};

export default useHomeStore;
