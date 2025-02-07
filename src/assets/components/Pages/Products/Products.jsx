import Top from "./img/top.png"
import { useSelector } from "react-redux"

import Card from "./Card/Card"
import { TopSection, InfoContainer, Title, Info, ButtonTop, ImgTopContainer, ImgTop, ProductsSection, CardsContainer } from "./productsStyle"
import Categorias from "./Categories/Categorias"

const Products = () => {
  const products = useSelector((state) => state.products.products);
  const selectedCategory = useSelector(state => state.categories.selectedCategory);

  let filteredProducts = [];

  if (selectedCategory) {
    filteredProducts = products.filter(product => product.category === selectedCategory);
  } else {
    filteredProducts = products;
  }

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
        <Categorias />
        <CardsContainer>
          {filteredProducts.map((product) => (
            <Card key={product.id} {...product} />
          ))}
        </CardsContainer>
      </ProductsSection>
    </>
  )
}

export default Products;
