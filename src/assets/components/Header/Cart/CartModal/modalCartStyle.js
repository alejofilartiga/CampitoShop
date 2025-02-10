import styled from "styled-components";

// MODAL CART

export const StyledWrapper = styled.div`
    top: 0;
    position: fixed;
    background-color: #69db7c;
    width: 30%;
    right: 0.3px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
`


export const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-bottom: -15%;
`

export const TitleTop = styled.h2`
    color: #343a40;
    font-size: 30px;
    text-align: center;

`

export const CloseButton = styled.button`
    font-size: 25px;
    padding: 0.1em 0.5em;
    border: transparent;
    box-shadow: 2px 2px 4px rgba(0,0,0,0.4);
    background: #006600;
    color: white;
    border-radius: 4px;
    font-family: "Lilita One", cursive;

    @media(max-width: 492px) {
        font-size: 15px;
    }
    
    &:hover {
        background: #006600;
        background: linear-gradient(90deg, rgb(21, 255, 9) 0%, rgba(2, 103, 0, 0.85) 100%);
    }
    &:active {
        transform: translate(0em, 0.2em);
    }
`

export const Divider = styled.hr`
    border: 2px solid black;
    width: 100%;
`

export const MainContainer = styled.div`
    overflow-y: scroll;
    width: 98%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    height: 40%;
    background-color: aliceblue;
`

export const TotalContainer = styled.div`
    background-color: white;
    width: 90%;
    text-align: center;
    border: 2px solid black;
    border-radius: 10px;

`

export const TotalPriceTitle = styled.h2`
    font-size: 25px;

`


export const BottomButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px; 
    width: 90%;

    margin-bottom: 10%;
`

export const BottomButtonStyled = styled.button`
    font-size: 30px;
    padding: 0.1em 0.5em;
    border: transparent;
    box-shadow: 2px 2px 4px rgba(0,0,0,0.4);
    background: #006600;
    color: white;
    border-radius: 4px;
    font-family: "Lilita One", cursive;

    @media(max-width: 492px) {
        font-size: 15px;
    }
    
    &:hover {
        background: #006600;
        background: linear-gradient(90deg, rgb(21, 255, 9) 0%, rgba(2, 103, 0, 0.85) 100%);
    }
    &:active {
        transform: translate(0em, 0.2em);
    }
`

// CART CARD

export const ProductContainer = styled.div`
    position: absolute;
    display: flex;
    width: 100%;

`

export const InfoContainer = styled.div`


`

export const ImageContainer = styled.div`


`

export const ImageProduct = styled.img`

`

export const TitleProduct = styled.h2`

`

export const PriceProduct = styled.h2`

`

export const QuantityNumber = styled.div`

`

export const QuantityButtonsContainer = styled.div`

`

export const QuantityButton = styled.button`

`

export const TrashContainer = styled.div`

`

export const TrashImage = styled.div`

`