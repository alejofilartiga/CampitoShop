import styled from "styled-components";
export const StyledWrapper = styled.div`

    background-color: #69db7c;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    gap: 10px;
    border-radius: 10px;
    @media(max-width: 798px) {
        width: 70%;
    }

`


export const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-bottom: -20px;
`

export const TitleTop = styled.h2`
    color: #343a40;
    font-size: 30px;
    text-align: center;
    @media (max-width: 492px) {
        font-size: 20px;
    }
`



export const Divider = styled.hr`
    width: 100%;
    border: 1px solid black;
`

export const MainContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start; 
    padding-left: 20px;
    gap: 20px;
    height: 300px;
    overflow-y: auto;
    
    &::-webkit-scrollbar {
        background: transparent;
    }
    &::-webkit-scrollbar:horizontal {
        display: none;
    }

    @media(max-width: 798px) {
        padding-right: 20px;
    }
`

export const TotalContainer = styled.div`
    background-color: white;
    width: 90%;
    text-align: center;
    border: 2px solid black;
    border-radius: 10px;
`

export const TotalPriceTitle = styled.h2`
    font-size: 25px;
    @media(max-width: 492px) {
        font-size: 15px;
    }
`
