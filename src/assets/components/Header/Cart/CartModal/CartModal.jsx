import CartCard from "./CartCard"
import { StyledWrapper, TopContainer, TitleTop, CloseButton, MainContainer, TotalContainer, TotalPriceTitle, BottomButtonsContainer, BottomButtonStyled, Divider } from "./modalCartStyle"



const CartModal = () => {
  return (
    <StyledWrapper>
        <TopContainer>
            <TitleTop>TODOS LOS PRODUCTOS</TitleTop>
            <CloseButton>X</CloseButton>
        </TopContainer>
        <Divider/>
        <MainContainer>
            {/* <CartCard/> */}
        </MainContainer>
        <TotalContainer>
            <TotalPriceTitle>TOTAL DE PRODUCTOS: $12000</TotalPriceTitle>
        </TotalContainer>
        <BottomButtonsContainer>
            <BottomButtonStyled>COMPRAR</BottomButtonStyled>
            <BottomButtonStyled>VACIAR</BottomButtonStyled>
        </BottomButtonsContainer>
    </StyledWrapper>
  )
}

export default CartModal
