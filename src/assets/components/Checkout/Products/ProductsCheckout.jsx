// import {formatPrice} from "../../../../Utils/formatPrice"
import CardCheckout from "./CardCheckout/CardCheckout"
import {StyledWrapper, TopContainer, TitleTop, Divider, MainContainer, TotalContainer, TotalPriceTitle} from "./productsCheckoutStyled"
const ProductsCheckout = ({cartItems, price}) => {

  return (
          <StyledWrapper>
            <TopContainer>
                <TitleTop>Tu pedido:</TitleTop>
            </TopContainer>
            <Divider />
            <MainContainer>
                {cartItems.length ? (
                  cartItems.map((item) => (
                    <CardCheckout key={item.id} {...item} />
                  ))
                ) : (
                    <p style={{color:'#343a40'}} >No hay productos en el carrito.</p>
                )}
            </MainContainer>
            <TotalContainer>
                <TotalPriceTitle>TOTAL DE PRODUCTOS: ${price}.</TotalPriceTitle>
            </TotalContainer>
          </StyledWrapper>
  )
}

export default ProductsCheckout
