import Escudo from "./img/escudo.png"
import { HeaderContainer,
         NavContainer,
         LogoContainer,
         Logo,
         LogoTitle,
         CartContainer
 } from "./headerStyle"
import CartBadge from "./Cart/CartBadge/CartBadge";
import { MenuProvider } from './MenuToggle/MenuContext';
import DropdownMenu from './MenuToggle/DropMenu';
import { Link } from "react-router-dom"
import CartModal from "./Cart/CartModal/CartModal";
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
            <CartBadge/>
            <CartModal/>
          </CartContainer>
        </NavContainer>
      </HeaderContainer>
   

    </>
  )
}

export default Header
