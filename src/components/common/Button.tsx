import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 0.5rem 1rem;

  font-size: 1rem;

  color: #898989;
  background-color: #e9e9e9;

  cursor: pointer;

  text-transform: uppercase;

  &:hover {
    background-color: #dcdcdc;
  }
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, type = 'button', ...rest } = props;

  // eslint-disable-next-line react/button-has-type
  return (
    <StyledButton type={type} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
