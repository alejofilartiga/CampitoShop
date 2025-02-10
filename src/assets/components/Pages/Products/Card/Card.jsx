
import {CardContainer, ImageContainer, CardImage, CardTitle, CardPrice, CardButton} from "./cardStyle"
import { useDispatch } from "react-redux";
import { addProduct } from "../../../Redux/cart/cartSlice";
const Card = ({
    id,
    img,
    title,
    price
}) => {

  const dispatch = useDispatch();
  return (
    <CardContainer>
        <ImageContainer>
            <CardImage src={img}/>
        </ImageContainer>
        <CardTitle>{title}</CardTitle>
        <CardPrice>${price}</CardPrice>
        <CardButton onClick={() => dispatch(addProduct({id,img,title,price}))}>AGREGAR AL CARRITO</CardButton>
    </CardContainer>
  );
};

export default Card
