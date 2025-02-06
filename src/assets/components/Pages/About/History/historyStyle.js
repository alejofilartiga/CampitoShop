import styled from "styled-components";

export const HistorySection = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    background-color: #006600;
    padding-top: 9%;
    padding-bottom: 5%;
    flex-wrap: wrap;
`

export const InfoContainer = styled.div`
    display: flex;
    align-items: start;
    flex-direction: column;
    width: 55%;
    margin-top: -1.7%;
    @media (max-width: 768px) {
        width: 90%;
        margin-top: 0;
        text-align: center;
        align-items: center;
        justify-content: center;
    }
`

export const InfoTitle = styled.h2`
    color: white;
    font-size: 90px;
    margin-bottom: -10px;
    @media (max-width: 492px) {
        font-size: 80px;
    }
`

export const Info = styled.p`
    color: white;
    font-size: 20px;
`

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

`

export const Image = styled.img`
    width: 350px;
    border-radius: 15px;
`