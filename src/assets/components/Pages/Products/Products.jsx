import Top from "./img/top.png"

import { TopSection, InfoContainer, Title, Info, ButtonTop, ImgTopContainer, ImgTop, ProductsSection, CardsContainer } from "./productsStyle"
import Dropdown from "./Dropdown"
function Products() {
  return (
    <>
      <TopSection>
        <InfoContainer>
          <Title>PORQUE LO LLEVO EN EL ALMA <br />
          PORQUE LO LLEVO EN LA PIEL
          </Title>
          <Info>Nueva piel, se renueva la pasion. <br />
          Consegui la actual camiseta del Campito para esta temporada.</Info>
          <ButtonTop>AÑADIR AL CARRITO</ButtonTop>
        </InfoContainer>
        <ImgTopContainer>
          <ImgTop src={Top} />
        </ImgTopContainer>
      </TopSection>
      <ProductsSection>
        <Dropdown />
        <CardsContainer>
          
        </CardsContainer>
      </ProductsSection>
    </>
  )
}

export default Products;
