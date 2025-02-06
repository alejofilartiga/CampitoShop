import styled from "styled-components";

export const ContactSection = styled.section`
    display: flex;
    justify-content: center;
    gap: 90px;
    align-items: center;
    background-color:rgba(0, 0, 0, 0.68);
    width: 100%;
    padding-top: 10%;
    padding-bottom: 5%;

    @media (max-width: 768px) {
        padding-top: 15%;
        flex-wrap: wrap;
        flex-direction: column;
        gap: 0px;
                
    }
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;

    @media (max-width: 768px) {
        width: 90%;
        align-items: center;
        justify-content: center;
    }

`

export const FormTitle = styled.h2`
    font-size: 70px;
    color: #fff;
    text-align: center;

    @media (max-width: 492px) {
        font-size: 40px;
        text-align: center;
    }
`

export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40%;

    @media (max-width: 768px) {
        width: 90%;
    }

    .map{
        width: 100%;
        height: 390px;
        border-radius: 10px;

    }

`

export const RightTitle = styled.h2`
    font-size: 70px;
    color: #fff;
    text-align: center;
    
    @media (max-width: 492px) {
        font-size: 40px;
        text-align: center;
    }

`


