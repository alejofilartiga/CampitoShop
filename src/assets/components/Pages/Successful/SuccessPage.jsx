import check from "./img/check.png";
import { SuccessWrapper, InfoContainer, SuccesImg, SuccessTitle, SuccessText, SuccessButton } from "./successStyle";
import {useNavigate} from "react-router-dom";

function SuccessPage() {

  const navigate = useNavigate();
  return (
    <>
      <SuccessWrapper>
        <InfoContainer>
          <SuccesImg src={check} alt="compra realizada" />
          <SuccessTitle>¡Gracias por tu compra!</SuccessTitle>
          <SuccessText>Esperamos volver a verte.</SuccessText>
          <SuccessButton onClick={()=>navigate("/products")} >Seguir comprando</SuccessButton>
        </InfoContainer>
      </SuccessWrapper>
    </>
  )
}

export default SuccessPage
