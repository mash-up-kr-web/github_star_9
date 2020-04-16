import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const S = {
  Container: styled.div`
    width: 100%;
    padding: 1rem 2rem;
    background-color: #e99002;
    color: #fff;
  `,
};

const ErrorMessage = ({ errorName }) => {
  const errorMessage = `User ${errorName} is not found.`;
  return <S.Container>{errorMessage}</S.Container>;
};

ErrorMessage.propTypes = {
  errorName: PropTypes.string.isRequired,
};

export default ErrorMessage;
