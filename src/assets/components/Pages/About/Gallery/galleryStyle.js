import styled from "styled-components";
import cover from "./img/cover.jpg";
export const GallerySection = styled.section`
    background-color:rgb(17, 16, 16);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;

    @media (max-width: 768px) {
        background-image: url(${cover});
        background-size: cover;
        background-repeat: no-repeat;
        height: 50vh;
        background-position: center;
    }
`

export const ContainerLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    margin-top: 20px;
    width: 25%;

    @media (max-width: 768px) {
        display: none;
    }
`

export const ImageLeft = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);

`

export const ContainerRight = styled.div`
    width: 23%;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    

    @media (max-width: 768px) {
        display: none;
    }

`

export const ImageRight = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);


`