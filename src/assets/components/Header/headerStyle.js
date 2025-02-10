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
    
    @media (max-width: 768px) {
        width: 60px;
    }

`

export const LogoTitle = styled.h2`
    color: white;
    font-size: 50px;
    @media (max-width: 768px) {
        display: none;
    }

`

export const CartContainer = styled.div`
    display: flex;
    justify-content: center;
`



