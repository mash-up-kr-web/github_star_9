import styled from "styled-components";

export const Button = styled.button`
  background-color: #ced4da;
  cursor: pointer;
  outline: none;
  font-size: 14px;
  padding: 8px 12px;
  opacity: 0.7;
  border: 1px solid #868e96;

  transition: background-color 0.2s ease-in-out;

  &:hover {
    opacity: 0.85;
  }
`;
