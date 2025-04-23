import { useDispatch } from "react-redux"
import {addProduct, removeProduct} from "../../../Redux/cart/cartSlice"
import trash from "../../../Header/Cart/CartModal/img/trash.png"

import { ProductContainer, ProductWrapper, InfoContainer, ImageContainer, ImageProduct, TitleProduct, PriceProduct, QuantityButtonsContainer, QuantityButton, TrashContainer, TrashImage } from "./cardCheckoutStyled";

const CardCheckout = ({img,title,price,quantity,id}) => {
    const dispatch = useDispatch()
    return (
       <ProductContainer>
            <ProductWrapper>
                <ImageContainer>
                    <ImageProduct src={img} alt={title}  />
                </ImageContainer>
                <InfoContainer>
                    <TitleProduct>{title}</TitleProduct>
                    <PriceProduct>${price} | {quantity} </PriceProduct>
                    <QuantityButtonsContainer>
                    <QuantityButton onClick={()=> dispatch(removeProduct(id))}>-</QuantityButton>
                    <QuantityButton onClick={()=> dispatch(addProduct({img,title,price,id}))}>+</QuantityButton>
                    </QuantityButtonsContainer>
                </InfoContainer>
            </ProductWrapper>
            <TrashContainer onClick={()=> dispatch(removeProduct(id))} >
                <TrashImage src={trash}  />
            </TrashContainer>
        </ProductContainer>
    )
}
  


export default CardCheckout
