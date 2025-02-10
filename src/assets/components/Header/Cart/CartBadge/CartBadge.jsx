import { StyledWrapper, CartTitle, CartBadge as StyledCartBadge, CartIcon } from "./cartBadgeStyle";
import { useDispatch, useSelector } from "react-redux";
import {toggleHiddenCart} from "../../../Redux/cart/cartSlice"
import carticon from "./img/carticon.png"



const CartBadgeComponent = () => {
    const totalCartItems = useSelector(state=>state.cart.cartItems).reduce(
        (acc,item) => (acc+=item.quantity),
        0
      )
    const dispatch = useDispatch()
  return (
    <StyledWrapper onClick={() => dispatch(toggleHiddenCart())} >
        <CartIcon src={carticon} />
        <CartTitle>CARRITO</CartTitle>
        <StyledCartBadge>{totalCartItems}</StyledCartBadge>
    </StyledWrapper>
  )
}

export default CartBadgeComponent
