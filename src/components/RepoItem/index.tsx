import { StarFilled } from '@ant-design/icons';
import React, { useCallback } from 'react';
import styled from 'styled-components';

import { RepoType } from '../../types';

interface Props extends RepoType {}

export const RepoItem: React.FC<Props> = (props) => {
  const { htmlUrl, fullName, starCount } = props;

  const handleRedirect = useCallback(() => {
    window.open(htmlUrl);
  }, [htmlUrl]);

  return (
    <Wrapper onClick={handleRedirect}>
      <UserName>{fullName}</UserName>
      <Star>
        <StarFilled />
        <Rating>{starCount}</Rating>
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
