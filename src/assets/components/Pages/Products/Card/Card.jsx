
import {CardContainer, ImageContainer, CardImage, CardTitle, CardPrice, CardButton} from "./cardStyle"

const Card = ({
    img,
    title,
    price,

}) => {
  return (
    <CardContainer>
        <ImageContainer>
            <CardImage src={img}/>
        </ImageContainer>
        <CardTitle>{title}</CardTitle>
        <CardPrice>${price}</CardPrice>
        <CardButton>AGREGAR AL CARRITO</CardButton>
    </CardContainer>
  );
};

export default Card
