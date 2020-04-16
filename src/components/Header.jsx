import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import InputField from './InputField';

const S = {
  Container: styled.div`
    width: 100%;
    padding: 3rem;
    background-color: #fafafa;
    box-sizing: border-box;
    margin-bottom: 3rem;
  `,
  Title: styled.h1`
    font-size: 4rem;
    margin-bottom: 1rem;
  `,
  SubTitle: styled.h2`
    font-size: 1.5rem;
    font-weight: lighter;
    margin-bottom: 1rem;
  `,
};

const Header = ({ value, setValue, onSubmit }) => {
  return (
    <S.Container>
      <S.Title>Gitstar Ranking</S.Title>
      <S.SubTitle>
        Unofficial GitHub star ranking for users, organizations and
        repositories.
      </S.SubTitle>
      <InputField value={value} setValue={setValue} onSubmit={onSubmit} />
    </S.Container>
  );
};

Header.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Header;
