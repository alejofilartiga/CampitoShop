import styled from 'styled-components';

export const ErrorContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #000600;
`
export const ImageError = styled.img`
    object-fit: contain;
    width: 100%;
    height: 100vh;
    filter: blur(3px);

    @media (max-width: 768px) {
        filter: blur(0px);

    }

`
export const ErrorInfo = styled.div`
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        width: 100%;
    }

`



export const ErrorTitle = styled.h2`
    width: 100% ;
    font-size: 15vh;
    color: #fff;
    text-shadow: 0 0 10px #000;
    margin-bottom: 0px;
    @media (max-width: 768px) {
        margin-top: 40%;
        font-size: 9vh;
    }
`

export const BackButton = styled.button`

    font-size: 40px;
    padding: 0.3em 3em;
    border: transparent;
    box-shadow: 2px 2px 4px rgba(0,0,0,0.4);
    background: #006600;
    color: white;
    border-radius: 4px;
    font-family: "Lilita One", cursive;

    @media(max-width: 492px) {
        font-size: 30px;
    }
    
    &:hover {
        background: #006600;
        background: linear-gradient(90deg, rgb(21, 255, 9) 0%, rgba(2, 103, 0, 0.85) 100%);
    }
    &:active {
        transform: translate(0em, 0.2em);
    }
`