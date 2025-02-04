import Visa from "./img/visa.png"
import Mastercard from "./img/mastercard.png"
import Amex from "./img/amex.png"
import Banelco from "./img/banelco.png"
import Cabal from "./img/cabal.png"
import Naranja from "./img/naranja.png"
import Paypal from "./img/paypal.png"
import LinkP from "./img/link.png"
import Efec from "./img/efec.png"
import Cencosud from "./img/cencosud.png"
import PagoFacil from "./img/pagofacil.png"
import RapiPago from "./img/rapipago.png"



import { FooterStyled, Title, Container, LinksContainer, Links, PayContainer, PayImg, Info } from "./footerStyle"
import Card from "./Card"

function Footer() {
  return (
    <>
      <FooterStyled>
        <Title>¡Sigamos Conectados!</Title>
        <Container>
          <Card/>
        </Container>
        <LinksContainer>
          <Links href="#">Inicio |</Links>
          <Links> Productos |</Links>
          <Links> Nosotros |</Links>
          <Links> Contacto</Links>
        </LinksContainer>
        <PayContainer>
          <PayImg src={Visa}/>
          <PayImg src={Mastercard}/>
          <PayImg src={Amex}/>
          <PayImg src={Cabal}/>
          <PayImg src={Naranja}/>
          <PayImg src={Banelco}/>
          <PayImg src={Paypal}/>
          <PayImg src={LinkP}/>
          <PayImg src={Efec}/>
          <PayImg src={Cencosud}/>
          <PayImg src={PagoFacil}/>
          <PayImg src={RapiPago}/>
        </PayContainer>
        <Info>Copyright CAMPITO - Idea de alejofilartiga - 2025. Todos los derechos reservados.</Info>
      </FooterStyled>
    </>
  )
}

export default Footer
