import CartCard from "./CartCard"
import { StyledWrapper, TopContainer, TitleTop, CloseButton, MainContainer, TotalContainer, TotalPriceTitle, BottomButtonsContainer, BottomButtonStyled, Divider, BlurBackground } from "./modalCartStyle"
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { clearCart, toggleHiddenCart } from "../../../Redux/cart/cartSlice"
import PopUp from "./PopUp";

const CartModal = () => {

  const {cartItems} = useSelector(state=> state.cart)
  const hiddenCart = useSelector(state=> state.cart.hidden)
  const dispatch = useDispatch()
  const modalRef = useRef()
  const [showPopup, setShowPopup] = useState(false);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      dispatch(toggleHiddenCart());
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if(!hiddenCart){
      dispatch(toggleHiddenCart())
    }
  },[dispatch])

  const totalPrice = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity)
  },0)

  const handleClearCart = () => {
    setShowPopup(true);
  };

  const confirmClearCart = () => {
    dispatch(clearCart());
    setShowPopup(false);
  };

  const cancelClearCart = () => {
    setShowPopup(false);
  };

  const navigate = useNavigate();

  return (
    <>
        {!hiddenCart && (
        <>
          <BlurBackground />
          <StyledWrapper ref={modalRef}>
            <TopContainer>
                <TitleTop>TODOS LOS PRODUCTOS:</TitleTop>
                <CloseButton onClick={() => dispatch(toggleHiddenCart())}>X</CloseButton>
            </TopContainer>
            <Divider />
            <MainContainer>
                {cartItems.length ? (
                  cartItems.map((item) => (
                    <CartCard key={item.id} {...item} />
                  ))
                ) : (
                    <p style={{color:'#343a40'}} >No hay productos en el carrito.</p>
                )}

            </MainContainer>
            <TotalContainer>
                <TotalPriceTitle>TOTAL DE PRODUCTOS: ${totalPrice}.</TotalPriceTitle>
            </TotalContainer>
            <BottomButtonsContainer>
                <BottomButtonStyled onClick={() => 
                {
                  navigate('/successful');
                  dispatch(clearCart());
                  dispatch(toggleHiddenCart());
                }} disabled={!cartItems.length}>COMPRAR</BottomButtonStyled>
                <BottomButtonStyled onClick={handleClearCart} disabled={!cartItems.length}>VACIAR</BottomButtonStyled>
            </BottomButtonsContainer>
            {showPopup && (
              
              <PopUp
                message="¿Estás seguro de que deseas vaciar el carrito?"
                onConfirm={confirmClearCart}
                onCancel={cancelClearCart}
              />
            ) }
          </StyledWrapper>
        </>
        )}
    </>

  )
}

export default CartModal
