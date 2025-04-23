import React from 'react';
import CheckoutForm from '../../Checkout/Form/CheckoutForm';
import ProductsCheckout from '../../Checkout/Products/ProductsCheckout';
import { ContainerCheckoutStyled } from './checkoutStyled';
import { useSelector } from 'react-redux';
const Checkout = () => {
  
  const {cartItems} = useSelector((state) => state.cart)
  const price = cartItems.reduce((acc,item)=>{
    return (acc += item.price * item.quantity)
  },0)  
  return (
    <div>
      <ContainerCheckoutStyled>
        <CheckoutForm 
          cartItems={cartItems}
          price={price}
        />
        <ProductsCheckout 
          cartItems={cartItems}
          price={price}
        />
      </ContainerCheckoutStyled>
    </div>
  );
};

export default Checkout;
