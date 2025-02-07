import styled from 'styled-components';

export const CategoriasContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  width: 70%;
`;

export const CardCategoria = styled.button`
    text-transform: uppercase;
    font-size: 25px;
    padding: 0.3em 2em;
    border: transparent;
    box-shadow: 2px 2px 4px rgba(0,0,0,0.4);
    background:rgb(0, 0, 0);
    color: white;
    border-radius: 4px;
    font-family: "Lilita One", cursive;

    @media(max-width: 492px) {
        font-size: 15px;
    }
    
    &:hover {
        background: #006600;
        background: linear-gradient(90deg, rgb(255, 255, 255) 0%, rgba(196, 189, 0, 0.85) 100%);
        color: black;
    }
    &:active {
        transform: translate(0em, 0.2em);
    }
`;

