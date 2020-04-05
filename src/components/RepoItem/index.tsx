import { StarFilled } from '@ant-design/icons';
import React, { useCallback } from 'react';
import styled from 'styled-components';

interface Props {
  html_url: string;
  full_name: string;
  stargazers_count: number;
}

export const RepoItem: React.FC<Props> = (props) => {
  const { html_url, full_name, stargazers_count } = props;

  const handleRedirect = useCallback(() => {
    window.open(html_url);
  }, [html_url]);

  return (
    <Wrapper onClick={handleRedirect}>
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
  border: 1px solid #ced4da;
  padding: 12px;
  font-size: 24px;
  cursor: pointer;

  & + div {
    margin-top: -1px;
  }

  &:hover {
    background-color: #f8f9fa;
  }
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
