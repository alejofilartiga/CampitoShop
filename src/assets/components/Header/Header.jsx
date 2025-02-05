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

import { Link } from "react-router-dom"

function Header() {
  return (
    <>
      <HeaderContainer style={{ zIndex: 3 }}>
        <NavContainer>
          <Menu>MENU</Menu>
          <LogoContainer>
            <Link to='/home' className="LinkContainer">
              <Logo src={Escudo}/>
              <LogoTitle>SHOP</LogoTitle>
            </Link>
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
