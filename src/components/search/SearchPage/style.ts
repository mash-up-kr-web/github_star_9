import React from 'react';
import styled, { css } from 'styled-components';

const SearchPage = React.memo(styled.main<{ moveTop: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  position: absolute;
  top: 30vh;

  .sub-title {
    margin: 1rem 0;

    font-size: 2rem;
    font-weight: lighter;
    text-align: center;
  }

  .status-section {
    margin: 3rem;
  }

  ${(props) =>
    props.moveTop &&
    css`
      animation-name: moveSearchBoxToTop;
      animation-duration: 1s;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;

      @keyframes moveSearchBoxToTop {
        100% {
          top: 5vh;
        }
      }
    `};
`);

export default { SearchPage };
