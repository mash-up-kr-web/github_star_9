import React from 'react';
import styled from 'styled-components';

const StyledNotFound = styled.div`
  font-size: 5rem;
  font-weight: lighter;
`;

interface NotFoundProps {
  className: string;
}

const NotFound: React.FC<NotFoundProps> = (props) => {
  return <StyledNotFound {...props}>Not Found</StyledNotFound>;
};

export default NotFound;
