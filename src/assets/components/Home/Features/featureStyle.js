import styled from "styled-components"

export const FeatureSection = styled.section`
    background-color: #1e1e1e;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 30px;
`

export const TitleContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 20px;
    width: 100%;
`

export const TitleImg = styled.img`
    width: 100px;
`

export const Title = styled.h2`
    font-size: 70px;
    color: white;
`

export const FeaturesContainer = styled.div`
    display: flex;
    gap: 40px;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const FeaturesImg = styled.img`
    width: 450px;
    border-radius: 10px;
`

export const FeatureBtn = styled.button`
    margin-top: 30px;
    /* width: 100%; */
    font-size: 30px;
    padding: 0.3em 2em;
    border: transparent;
    box-shadow: 2px 2px 4px rgba(0,0,0,0.4);
    background: #006600;
    color: white;
    border-radius: 4px;
    font-family: "Lilita One", cursive;

    &:hover {
        background: #006600;
        background: linear-gradient(90deg, rgb(255, 209, 2) 0%, rgba(247, 243, 42, 0.85) 100%);
        color: black;
    }
    &:active {
        transform: translate(0em, 0.2em);
    }
`

