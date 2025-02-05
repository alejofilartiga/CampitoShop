import styled from "styled-components";

export const GallerySection = styled.section`
    background-color:rgb(17, 16, 16);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    overflow: hidden;
`

export const ContainerLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    margin-top: 20px;
    width: 25%;

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