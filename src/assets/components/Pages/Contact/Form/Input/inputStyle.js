import styled from "styled-components";

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

`

export const LabelStyled = styled.label`
    width: 100%;
    color: white;
    margin-bottom: 10px;
    font-weight: 200; 
`

export const InputStyled = styled.input`
    padding: 10px;
    border: none;
    border-radius: 5px;
    margin-bottom: 20px;
    
    &&:focus{
        z-index: 1;
        position: relative;
        outline: none;
        box-shadow: 0 0 5px #04bf58;
        transform: scale(1.05);
        transition: transform 0.3s ease-in-out;
    }

`

export const ErrorStyled = styled.span`
  margin-top: -5px;
  color: red;
`;