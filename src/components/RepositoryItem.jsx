import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import starImg from '../image/star.svg';

const S = {
  Container: styled.div`
    width: 100%;
    padding: 1rem;
    border: 1px solid #ededed;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    margin-bottom: -1px;
  `,
  Star: styled.div`
    margin-left: auto;
  `,
  Icon: styled.img`
    width: 0.875rem;
  `,
  Name: styled.div`
    font-size: 0.875rem;
  `,
  StarNumber: styled.span`
    margin-left: 0.5rem;
  `,
};

const RepositoryItem = ({ name, star }) => (
  <S.Container>
    <S.Name>{name}</S.Name>
    <S.Star>
      <S.Icon src={starImg} alt="star icon" />
      <S.StarNumber>{star}</S.StarNumber>
    </S.Star>
  </S.Container>
);

RepositoryItem.propTypes = {
  name: PropTypes.string.isRequired,
  star: PropTypes.number.isRequired,
};

export default RepositoryItem;
