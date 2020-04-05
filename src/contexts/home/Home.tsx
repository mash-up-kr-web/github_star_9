import React from "react";

import RepoResult from "./components/RepoResult";
import Title from "./components/Title";
import { HomeProvider } from "./HomeContext";

const Home = () => (
  <HomeProvider>
    <Title />
    <RepoResult />
  </HomeProvider>
);

export default Home;
