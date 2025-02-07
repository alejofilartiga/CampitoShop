import Top from "./img/top.png"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import Card from "./Card/Card"
import { TopSection, InfoContainer, Title, Info, ButtonTop, ImgTopContainer, ImgTop, ProductsSection, CardsContainer } from "./productsStyle"
import Categorias from "./Categories/Categorias"
import { ProductsShow } from "../../../data/ProductsData"
import { selectCategory } from "../../../components/Redux/categories/categoriesSlice"

const Products = () => {
  const dispatch = useDispatch();
  let products = useSelector((state) => state.products.products);
  const { selectedCategory } = useSelector(state => state.categories)

  useEffect(() => {
    if (!selectedCategory) {
      dispatch(selectCategory('All'));
    }
  }, [selectedCategory, dispatch]);

  if (selectedCategory && selectedCategory !== 'All') {
    products = products[selectedCategory] || [];
  } else {
    products = [
      ...ProductsShow['Juego'] || [],
      ...ProductsShow['Casual'] || [],
      ...ProductsShow['Otros'] || []
    ];
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
          {Array.isArray(products) && products.map(product => (
            <Card key={product.id} {...product} />
          ))}
        </CardsContainer>
      </ProductsSection>
    </>
  )
}

export default Products;
