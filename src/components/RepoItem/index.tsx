import { StarFilled } from '@ant-design/icons';
import React from 'react';
import styled from 'styled-components';

interface Props {
  html_url: string;
  full_name: string;
  stargazers_count: number;
}

export const RepoItem: React.FC<Props> = (props) => {
  const { html_url, full_name, stargazers_count } = props;

  return (
    <Wrapper>
      <UserName>{full_name}</UserName>
      <Star>
        <StarFilled />
        <Rating>{stargazers_count}</Rating>
      </Star>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* width: 500px; */
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
