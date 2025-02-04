import Escudo from "./img/escudo.png"
import { HeaderContainer,
         NavContainer,
         Menu,
         LogoContainer,
         Logo,
         LogoTitle,
         Cart,
         CartContainer
 } from "./headerStyle"




 
function Header() {
  return (
    <>
      <HeaderContainer>
        <NavContainer>
          <Menu>MENU</Menu>
          <LogoContainer>
            <Logo src={Escudo}/>
            <LogoTitle>SHOP</LogoTitle>
          </LogoContainer>
          <CartContainer>
            <Cart>CARRITO</Cart>
          </CartContainer>
      
        </NavContainer>
      </HeaderContainer>
    </>
  )
}

export default Header
