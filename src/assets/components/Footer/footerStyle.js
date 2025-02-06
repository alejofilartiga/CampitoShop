import styled from "styled-components"

export const FooterStyled = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #000700;
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
`

export const Title = styled.h2`
    color: white;
    font-size: 30px;
`

export const Container = styled.div`

`





export const LinksContainer = styled.div`
    padding: 20px;
`

export const Links = styled.a`
    font-size: 20px;
    color: white;

`

export const PayContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
`

export const PayImg = styled.img`
    width: 30px;

    @media (max-width: 492px) {
        width: 22px;
    }

`

export const Info = styled.h2`
    color: white;
    font-size: 15px;

    @media (max-width: 492px) {
        text-align: center;
    }

    .name{
        font-size: 15px;
    }

`

