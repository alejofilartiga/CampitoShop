import styled from 'styled-components';

export const SponsorsSection = styled.section`
    background-color: #006600;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
`

export const Tittle = styled.h2`
    color: white;
    font-size: 60px;
    text-align: center;
`

export const SponsorsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 90%;
    gap: 40px;
`

export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    height: 100px;
    width: 20%;
    box-shadow: 0 0 10px #000;
    border-radius: 10px;
    background-color: #001e00;
`

export const ImageSponsor = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 10px;
`

export const LigaContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;


`

export const AfaImage = styled.img`
    width: 120px;
    padding: 40px;
`