import styled from 'styled-components'
import cover from "./img/cover.png";

export const SuccessWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: url(${cover}) no-repeat center center/cover;
    width: 100%;
`


export const InfoContainer = styled.div`

    padding-top: 10%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    gap: 10px;

`

export const SuccesImg = styled.img`
    width: 50%;
`

export const SuccessTitle = styled.h2`
    font-size: 50px;
    color: white;
`

export const SuccessText = styled.p`
    font-size: 25px;
    margin-top: -10px;
    color: white;
`

export const SuccessButton = styled.button`
    font-size: 25px;
    padding: 0.3em 2em;
    border: transparent;
    box-shadow: 2px 2px 4px rgba(0,0,0,0.4);
    background:rgb(255, 255, 255);
    color: black;
    border-radius: 4px;
    font-family: "Lilita One", cursive;

    @media(max-width: 492px) {
        font-size: 15px;
    }
    
    &:hover {
        background:rgb(222, 233, 6);
        background: linear-gradient(90deg, rgb(237, 218, 4) 0%, rgba(221, 225, 12, 0.85) 100%);
        color: white;
    }
    &:active {
        transform: translate(0em, 0.2em);
    }

`