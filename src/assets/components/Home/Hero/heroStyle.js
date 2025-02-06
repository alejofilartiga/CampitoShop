import styled from "styled-components";
import cover from "./img/cover.jpg";
export const HeroSection = styled.section`
    background-color: #001e00;
    width: 100%;
    padding-top: 10%;
    padding-bottom: 10%;
    display: flex;
    justify-content: space-around;
    @media (max-width: 768px) {
        padding-top: 0%;
        text-align: center;
        align-items: center;
        justify-content: center;
        background-image: url(${cover});
        background-size: cover;
        height: 100vh;
        }
`

export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 45%;
   
    @media (max-width: 768px) {
        width: 100%;
        margin-top: -70%;
    }

    @media (max-width: 492px) {
        margin-top: -120%;
    }


`

export const Title = styled.h2`
    font-size: 80px;
    font-weight: 100px;
    color: white;
    @media(max-width: 492px) {
        font-size: 35px;
    }
`

export const BtnContainer = styled.div`
    display: flex;
    gap: 20px;
    @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
 }
`

export const BtnHero = styled.button`
    font-size: 30px;
    padding: 0.3em 2em;
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




export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    @media (max-width: 768px) {
    display: none;
 }
`

export const ImageHero = styled.img`
 width: 480px;
 height: 550px;

 
`