import React from 'react';
import { ButtonSubmitStyled } from './submitStyle';

const Submit = ({ disabled, text }) => {
  return (
    <ButtonSubmitStyled type="submit" disabled={disabled}>
      {text}
    </ButtonSubmitStyled>
  );
};

export default Submit;
