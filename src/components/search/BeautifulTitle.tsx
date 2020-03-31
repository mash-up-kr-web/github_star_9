import React from 'react';
import styled from 'styled-components';

const StyledBeautifulTitle = styled.h1`
  position: relative;
  padding: 0.5rem 4rem;

  font-size: 4rem;
  text-align: center;

  .background {
    position: absolute;

    z-index: -1;
    top: 0;
    left: 0;

    background-color: #fcffbe;
    width: 100%;
    height: 100%;

    transform: skew(-20deg);

    animation-name: changeColor;
    animation-duration: 15s;
    animation-iteration-count: infinite;
  }

  @keyframes changeColor {
    0% {
      background-color: #fce38a;
    }
    12.5% {
      background-color: #f38181;
    }
    25% {
      background-color: #ff7676;
    }
    37.5% {
      background-color: #f54ea2;
    }
    50% {
      background-color: #f02fc2;
    }
    62.5% {
      background-color: #6094ea;
    }
    75% {
      background-color: #17ead9;
    }
    87.5% {
      background-color: #6078ea;
    }
    100% {
      background-color: #fce38a;
    }
  }
`;

interface BeautifulTitle {
  title: string;
}

const BeautifulTitle: React.FC<BeautifulTitle> = ({ title }) => {
  return (
    <StyledBeautifulTitle>
      {title}
      <span className="background" />
    </StyledBeautifulTitle>
  );
};

export default BeautifulTitle;
