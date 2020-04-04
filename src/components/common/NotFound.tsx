import React from 'react';
import styled from 'styled-components';

const StyledNotFound = styled.div`
  font-size: 5rem;
  font-weight: lighter;
`;

const NotFound: React.FC<{ className: string }> = ({ className }) => {
  return <StyledNotFound className={className}>Not Found</StyledNotFound>;
};

export default NotFound;
