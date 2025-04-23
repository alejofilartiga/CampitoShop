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
    z-index: 4;
    gap: 10px;
    
    @media(max-width: 798px) {
        width: 70%;
    }

`


export const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-bottom: -20px;
`

export const TitleTop = styled.h2`
    color: #343a40;
    font-size: 30px;
    text-align: center;
    @media (max-width: 492px) {
        font-size: 20px;
    }
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
    cursor: pointer;
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
    width: 100%;
    border: 1px solid black;
`

export const MainContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-left: 20px;
    gap: 20px;
    height: 80%;
    overflow: scroll;
    overflow-y: auto;

    &::-webkit-scrollbar {
    background: transparent;
    }
    &::-webkit-scrollbar:horizontal {
        display: none;
    }

    @media(max-width: 798px) {
        padding-right: 20px;
    }

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
    @media(max-width: 492px) {
        font-size: 15px;
    }
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
    cursor: pointer;
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

    &:disabled {
    cursor: not-allowed;
    opacity: 0.5;

    }

    &:disabled:hover {
    transform: scale(1);
    }

`

// CART CARD

export const ProductContainer = styled.div`
    display: flex;
    width: 95%;
    border-radius: 10px;
    border: 2px solid black;
    height: 150px;
    justify-content: space-between;
    background-color: aliceblue;
    align-items: center;
    padding: 10px;
`

export const ProductWrapper = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
`

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;    
    width: 80%;
    height: 130px;
    border: 2px solid black;
    border-radius: 10px;
    background-color: #006600;
    @media(max-width: 798px){
        width: 80%;
    }
`
export const ImageProduct = styled.img`
    object-fit: contain;
    width: 100%;
    height: 100%;
`

export const InfoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    padding: 0px 30px;
`

export const TitleProduct = styled.h2`
    flex-wrap: wrap;
    width: 95%;
    text-align: start;
    color: #343a40;
    font-size: 20px;
    margin-bottom: 0px;
`

export const PriceProduct = styled.h2`
    width: 100%;
    font-size: 19px;
    margin-top: 0px;
    text-align: start;
`



export const QuantityButtonsContainer = styled.div`
    margin-top: -10px;
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 10px;
`

export const QuantityButton = styled.button`
    text-align: center;
    font-size: 20px;
    padding: 0.1em 0.5em;
    border: transparent;
    box-shadow: 2px 2px 4px rgba(0,0,0,0.4);
    background: #006600;
    color: white;
    border-radius: 4px;
    font-family: "Lilita One", cursive;
    cursor: pointer;
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

export const TrashContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 10%;
    background-color: black;
    border-radius: 10px;
    border: 2px solid black;
    padding: 5px;
    border: transparent;
    box-shadow: 2px 2px 4px rgba(0,0,0,0.4);
    background: #006600;
    color: white;
    font-family: "Lilita One", cursive;
    cursor: pointer;
    
    &:hover {
        background: #006600;
        background: linear-gradient(90deg, rgb(21, 255, 9) 0%, rgba(2, 103, 0, 0.85) 100%);
    }
    &:active {
        transform: translate(0em, 0.2em);
    }

`

export const TrashImage = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
 
`

export const BlurBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 3;
`;