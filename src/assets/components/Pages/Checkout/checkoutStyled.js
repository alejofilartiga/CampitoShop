import styled from "styled-components"

export const ContainerCheckoutStyled = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 10rem 0rem 2rem ;
    width: 100%;
    gap: 2rem;
    background-color:rgb(15, 150, 15);
    @media (max-width: 768px) {
        padding: 8rem 0rem 2rem;
        justify-content: center;
    }
`