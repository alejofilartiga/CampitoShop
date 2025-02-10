import styled from "styled-components";

export const StyledWrapper = styled.div`
    display: flex;
    height: 100%;

`



export const LinksContainer = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    position: absolute;
    z-index: 1;
    background-color:rgb(5, 73, 17);
    top: 0%;
    padding-left: 20px;
    height: 100vh;
    width: 250px;
    @media (max-width: 768px) {
        width: 140px;
        height: 40vh;
        border-radius: 0px 0px 10px 0px;
    }

    .linkStyle{
        font-size: 40px;
        color: white;

        @media (max-width: 768px) {
        font-size: 25px;
    }
    }
`;


export const ToggleIcon = styled.img`
    display: none;
    margin-left: 20px;
    width: 30px;
    height: 20px;
    z-index: 2;
    @media (max-width: 768px) {
        display: flex;
    }
`

export const Menu = styled.h2`
    z-index: 1000;
    color: white;
    font-size: 30px;
    margin-left: 20px;
    width: 90px;
    cursor: pointer;
    font-family: Arial, Helvetica, sans-serif;
    position: relative;
    border: none;
    background: none;
    text-transform: uppercase;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: color;
    
    @media (max-width: 492px) {
        font-size: 15px;
    }

    @media(max-width: 768px){
        display: none;
    }

    &:focus,
    &:hover {
        color: #fff;
    }
    
    &:focus:after,
    &:hover:after {
        
        width: 50%;
        left: 0%;
    }

    &:after {
        content: "";
        pointer-events: none;
        bottom: -2px;
        left: 50%;
        position: absolute;
        width: 0%;
        height: 2px;
        background-color: #fff;
        transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
        transition-duration: 400ms;
        transition-property: width, left;
    }
`
