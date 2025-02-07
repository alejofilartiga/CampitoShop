import Escudo from "./img/escudo.png"
import { HeaderContainer,
         NavContainer,
         LogoContainer,
         Logo,
         LogoTitle,
         Cart,
         CartContainer
 } from "./headerStyle"

 import { MenuProvider } from './MenuToggle/MenuContext';
 import DropdownMenu from './MenuToggle/DropMenu';
import { Link } from "react-router-dom"

 
function Header() {
  return (
    <>
      <HeaderContainer>
        <NavContainer>
          <MenuProvider >
            <DropdownMenu  />
          </MenuProvider>
          <LogoContainer>
            <Link to='/' className="LinkContainer">
              <Logo src={Escudo} />
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
