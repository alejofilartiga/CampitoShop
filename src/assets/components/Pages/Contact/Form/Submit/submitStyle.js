import styled from "styled-components"

export const ButtonSubmitStyled = styled.button`
    background-color: #057310;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;

    &&:hover {
    transform: scale(1.04);
    transition: transform 0.3s ease-in-out;
    };

    &:disabled {
    cursor: not-allowed;
    opacity: 0.5;

    }

    &:disabled:hover {
    transform: scale(1);
    }

`

