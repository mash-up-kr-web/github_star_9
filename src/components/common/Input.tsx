import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;

  padding: 0.5rem 1rem;

  font-size: 1rem;

  border: 1px solid #e9e9e9;
`;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = (props) => {
  const { type = 'text', ...rest } = props;

  return <StyledInput type={type} {...rest} />;
};

export default Input;
