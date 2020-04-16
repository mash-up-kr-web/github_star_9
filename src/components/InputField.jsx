import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const S = {
  Container: styled.form``,
  Input: styled.input`
    padding: 1rem 1rem;
    border: 1px solid #eaeaea;
    font-size: 0.875rem;
    width: 100%;
    max-width: 380px;
  `,
  Button: styled.input`
    padding: 1rem 2rem;
    font-size: 0.875rem;
    background-color: #eaeaea;
    outline: none;
    border: none;
  `,
};

const InputField = ({ onSubmit, value, setValue }) => {
  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <S.Container onSubmit={onSubmit}>
      <S.Input
        name="username"
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Github username"
      />
      <S.Button type="submit" value="Search" />
    </S.Container>
  );
};

InputField.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default InputField;
