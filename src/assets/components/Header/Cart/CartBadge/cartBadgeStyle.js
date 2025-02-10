import styled from "styled-components";

export const StyledWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    width: 100%;
    margin-left: 10px;
`

export const CartTitle = styled.h2`
    color: white;
    font-size: 30px;
    cursor: pointer;
    font-family: Arial, Helvetica, sans-serif;
    position: relative;
    padding-right: 50px;
    &&:hover{
        color: #006600;
        font-weight: 700;
    }

    @media (max-width: 798px) {
        display: none;
    }
`

export const CartIcon = styled.img`
    margin-right: 30px;
    position: relative;
    cursor: pointer;
    width: 30px;
    @media (min-width: 798px) {
        display: none;
    }
`

export const CartBadge = styled.span`
    background-color: #006600;
    color: white;
    font-size: 20px;
    padding: 5px 10px;
    border-radius: 20%;
    position: absolute;
    top: 20px;
    right: 9px;
    font-family: Arial, Helvetica, sans-serif;
    @media (max-width: 798px) {
        font-size: 10px;
        right: 10px;
        top: 10px;
        padding: 2px 5px;
    }

`