import styled from 'styled-components';

export const AboutSection = styled.section`
    background-color: #fab005;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    @media (max-width: 768px) {
        width: 100%;
        align-items: center;
        justify-content: center;
    }
`

export const AboutTitle = styled.h2`
    font-size: 40px;
    color: white;
    @media (max-width: 768px) {
        font-size: 30px;
        text-align: center;
    }
`

export const AboutInfo = styled.p`
    font-size: 25px;
    width: 80%;
    @media (max-width: 768px) {
        text-align: center;
    }
`

export const AboutButton = styled.button`
    width: 80%;
    font-size: 30px;
    padding: 0.3em 2em;
    border: transparent;
    box-shadow: 2px 2px 4px rgba(0,0,0,0.4);
    background:rgb(255, 255, 255);
    color: black;
    border-radius: 4px;
    font-family: "Lilita One", cursive;

    @media (max-width: 768px) {
        font-size: 20px;
        width: 100%;
        margin-bottom: 5%;
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

export const ImageContainer = styled.div`
    @media (max-width: 768px) {
        display: none;
    }
`

export const ImageAbout = styled.img`
    
`