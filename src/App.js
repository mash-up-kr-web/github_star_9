import React, { useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import RepoDetailList from "./components/RepoDetails/RepoDetailList";
import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
`;

const UserName = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;
const RepoInfo = styled.div`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const App = () => {
  const gitURL = "https://api.github.com/users";

  const [userName, setUserName] = useState("");
  const [repos, setRepos] = useState([]);
  const [userInfo, setUserInfo] = useState({
    name: userName,
    repo: 0,
    star: 0
  });

  const getUserName = e => {
    e.preventDefault();
    setUserName(e.target.value);
  };

  const getUserInfo = async () => {
    const response = await axios.get(`${gitURL}/${userName}/repos`);
    const { data } = response;
    setUserInfo({
      name: userName,
      repo: data.length,
      star: data.reduce(
        (accumulator, current) => accumulator + current.stargazers_count,
        0
      )
    });

    setRepos(data);
  };

  return (
    <div className="App">
      <Container>
        <Header inputHandler={getUserName} clickHandler={getUserInfo} />
        <UserName>{userInfo.name}</UserName>
        <RepoInfo>
          {userInfo.repo} Repositories | {userInfo.star} stars
        </RepoInfo>
        <hr />
        <div className="list">
          <RepoDetailList repos={repos} />
        </div>
      </Container>
    </div>
  );
};

export default App;
