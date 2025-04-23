import styled from "styled-components";
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