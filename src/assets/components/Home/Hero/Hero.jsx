import { HeroSection, TitleContainer, BtnContainer, BtnHero, ImageContainer, ImageHero, Title } from "./heroStyle"
import Nuevo from "./img/nuevo.png"
import { Link } from "react-router-dom"

function Hero() {
  return (
    <>
        <HeroSection>
          <TitleContainer>
            <Title>¡TIENDA OFICIAL DEL CAMPITO!</Title>
            <BtnContainer>
              <Link to='/products'><BtnHero>PRODUCTOS</BtnHero></Link>
              <Link to='/contact'><BtnHero>CONTACTO</BtnHero></Link>
            </BtnContainer>
          </TitleContainer>
          <ImageContainer>
            <ImageHero src={Nuevo} />
          </ImageContainer>
        </HeroSection>
    </>
  )
}

export default Hero
