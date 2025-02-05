import styled from 'styled-components';



export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    z-index: 2;
`

export const NavContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    position: fixed;
    top: 0%;
    background-color: #1e1e1e;
`

export const Menu = styled.h2`
    color: white;
    font-size: 30px;
    margin-left: 20px;
    cursor: pointer;
    font-family: Arial, Helvetica, sans-serif;
    position: relative;
    border: none;
    background: none;
    text-transform: uppercase;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: color;

    &:focus,
    &:hover {
        color: #fff;
    }
    
    &:focus:after,
    &:hover:after {
        width: 100%;
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







export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    .LinkContainer {
        text-decoration: none;
        color: white;
        display: flex;
        align-items: center;
        gap: 10px;
        justify-content: center;
    }

`

export const Logo = styled.img`
    width: 110px;
`

export const LogoTitle = styled.h2`
    color: white;
    font-size: 50px;
`

export const CartContainer = styled.div`
    display: flex;
    justify-content: center;
`



export const Cart = styled.h2`
    color: white;
    font-size: 30px;
    cursor: pointer;
    font-family: Arial, Helvetica, sans-serif;
    margin-right: 20px;
    position: relative;
    border: none;
    background: none;
    text-transform: uppercase;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: color;

    &:focus,
    &:hover {
        color: #fff;
    }
    
    &:focus:after,
    &:hover:after {
        width: 100%;
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