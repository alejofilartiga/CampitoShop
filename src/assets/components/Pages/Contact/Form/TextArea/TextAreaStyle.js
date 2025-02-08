import styled from "styled-components";

export const TextAreaStyled = styled.textarea`
    resize: none;
    height: 80px;
    width: 97%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    margin-bottom: 20px;


    &&:focus {
    z-index: 1;
    position: relative;
    outline: none;
    box-shadow: 0 0 5px #04bf58;
    transform: scale(1.05);
    transition: transform 0.3s ease-in-out;
    }

    @media (max-width: 492px) {
      width: 95%;
    }
    
`

export const ErrorStyled = styled.span`
  margin-top: -5px;
  color: red;
`;

