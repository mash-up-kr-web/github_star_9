import React from "react";
import Search from "./Search";
import styled from "styled-components";

const HeaderContain = styled.div`
  background-color: #eaeaea;
  padding: 2rem;
  margin-bottom: 2rem;
`;
const SubTitle = styled.div`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;
const Header = ({ inputHandler, clickHandler }) => {
  return (
    <div>
      <HeaderContain>
        <h1>Gitstar Ranking</h1>
        <SubTitle>
          Unofficial GitHub star ranking for users. organizations and
          repositories
        </SubTitle>
        <Search inputHandler={inputHandler} clickHandler={clickHandler} />
      </HeaderContain>
    </div>
  );
};

export default Header;
