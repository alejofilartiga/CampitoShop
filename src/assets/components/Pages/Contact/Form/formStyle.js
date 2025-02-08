import styled from "styled-components";

export const StyledWrapper = styled.div`
    width: 100%;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

`
export const FormContainer = styled.div`
    background-color: #000700;
    padding: 20px;
    width: 100%;
    border-radius: 10px;


    .heading {
    font-size: 24px;
    color: black;
    ;
    margin-bottom: 12px;
    font-weight: bold;
    display: block;
  }

    
`


export const FormStyled = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
`
