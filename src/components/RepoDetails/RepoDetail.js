import React from "react";
import star from "../../images/star.png";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid;
  display: flex;
  flex-direction: row;
  width: 70%;
  padding: 1rem;
  margin-bottom: -2px;
`;
const StarImg = styled.div`
  margin-left: 2rem;
  margin-right: 1rem;
`;

const RepoDetail = ({ name, stargazers_count }) => {
  return (
    <>
      <Container>
        <div>{name}</div>
        <StarImg>
          <img src={star} alt="star_image" width="20px" />
        </StarImg>

        <div>{stargazers_count}</div>
      </Container>
    </>
  );
};

export default RepoDetail;
