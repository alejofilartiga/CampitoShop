import styled from "styled-components";

export const TopSection = styled.section`
    background-color:rgb(1, 2, 0);
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10%;
    width: 100%;
    height: 100vh;

    @media (max-width: 768px) {
        flex-wrap: wrap;
        flex-direction: column;
        gap: 40px;
    }

`

export const InfoContainer = styled.div`
    display: flex;
    align-items: start;
    flex-direction: column;
    justify-content: center;
    width: 60%;
    @media (max-width: 768px) {
        width: 90%;
        align-items: center;
    }
`

export const Title = styled.h2`
    color: #2f9e44;
    font-size: 50px;

    @media (max-width: 492px) {
        text-align: center;
        font-size: 25px;
    }

`

export const Info = styled.p`
    margin-top: -30px;
    color: white;
    font-size: 25px;

    @media (max-width: 768px) {
        text-align: center;
        font-size: 20px;
        margin-top: 0px;
    }

`

export const ButtonTop = styled.button`
    width: 40%;
    font-size: 20px;
    padding: 0.3em 2em;
    border: transparent;
    box-shadow: 2px 2px 4px rgba(0,0,0,0.4);
    background:rgb(255, 255, 255);
    color: black;
    border-radius: 4px;
    font-family: "Lilita One", cursive;


    @media (max-width: 492px) {
        width: 80%;
    }

    &:hover {
        background:rgb(255, 255, 255);
        background: linear-gradient(90deg, rgb(81, 170, 98) 0%, rgba(2, 103, 0, 0.85) 100%);
        color: white;
    }
    &:active {
        transform: translate(0em, 0.2em);
    }

`


export const ImgTopContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 10%;

    @media (max-width: 768px) {

    }
`


export const ImgTop = styled.img`
    width: 300px

`

export const ProductsSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #006600;
    width: 100%;
    padding-top: 5%;
    padding-bottom: 5%;
`

export const CardsContainer = styled.div`

`