import { StarFilled } from '@ant-design/icons';
import React from 'react';
import styled from 'styled-components';

export const RepoItem = () => {
  return (
    <Wrapper>
      <UserName>mango906</UserName>
      <Star>
        <StarFilled />
        <Rating>10</Rating>
      </Star>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 500px;
  border: 1px solid #ced4da;
  padding: 12px;
  font-size: 24px;
`;

const UserName = styled.div`
  color: #495057;
  font-weight: 400;
`;

const Star = styled.div`
  display: flex;
  align-items: center;
`;

const Rating = styled.span`
  color: #495057;
  font-weight: 400;
  margin-left: 4px;
`;
