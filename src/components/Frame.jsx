import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 940px;
  margin: auto;
  padding: 5rem 0;
`;

const Frame = ({ children }) => {
  return <Container>{children}</Container>;
};

Frame.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Frame;
