import { ProductContainer, InfoContainer, ImageContainer, ImageProduct, TitleProduct, PriceProduct, QuantityNumber, QuantityButtonsContainer, QuantityButton, TrashContainer, TrashImage } from "./modalCartStyle";

import trashimg from "./img/trash.png";
import productimg from "../../../../data/img/titular.png"
const CartCard = ({ img, title, price, quantity, id }) => {
    return (
        <ProductContainer>
        <ImageContainer>
            <ImageProduct src={productimg}  />
        </ImageContainer>
        <InfoContainer>
            <TitleProduct>CHOMBA</TitleProduct>
            <PriceProduct>$12500</PriceProduct>
            <QuantityButtonsContainer>
            <QuantityButton>-</QuantityButton>
            <QuantityNumber>3</QuantityNumber>
            <QuantityButton>+</QuantityButton>
            </QuantityButtonsContainer>
        </InfoContainer>
        <TrashContainer>
            <TrashImage src={trashimg} alt="trash" />
        </TrashContainer>
        </ProductContainer>
    );
}

export default CartCard;