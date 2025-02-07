import styled from "styled-components";

export const CardContainer = styled.div`
    margin: 20px;
    background-color: #001e00;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 250px;
    padding: 15px;
    border-radius: 10px;
    height: 400px; 
`

export const ImageContainer = styled.div`
    background-color: #fab005;
    border-radius: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CardImage = styled.img`
    object-fit: contain;
    width: 100%;
    height: 200px;
`

export const CardTitle = styled.h2`
    width: 100%;
    font-size: 20px;
    text-align: start;
`

export const CardPrice = styled.h3`
    margin-top: 0px;
    width: 100%;
    font-size: 25px;
    text-align: start;
`

export const CardButton = styled.button`
    width: 100%;
    font-size: 24px;
    padding: 5px 5px;
    border: transparent;
    box-shadow: 2px 2px 4px rgba(0,0,0,0.4);
    background:rgb(119, 83, 0);
    color: white;
    border-radius: 4px;
    font-family: "Lilita One", cursive;

    @media(max-width: 492px) {
        font-size: 15px;
    }
    
    &:hover {
        background: #006600;
        background: linear-gradient(90deg, rgb(0, 0, 0) 0%, rgba(2, 103, 0, 0.85) 100%);
    }
    &:active {
        transform: translate(0em, 0.2em);
    }

`