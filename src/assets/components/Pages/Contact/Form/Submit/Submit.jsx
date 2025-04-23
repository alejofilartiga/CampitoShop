import React from 'react';
import { ButtonSubmitStyled } from './submitStyle';

const Submit = ({ disabled = false, children, onClick }) => {
  return (
    <ButtonSubmitStyled 
      type="submit" 
      disabled={disabled}
      onClick={onClick}
      >
        {children}
    </ButtonSubmitStyled>
  );
};

export default Submit;
