import { HeroSection, TitleContainer, BtnContainer, BtnHero, ImageContainer, ImageHero, Title } from "./heroStyle"
import Nuevo from "./img/nuevo.png"


function Hero() {
  return (
    <>
        <HeroSection>
          <TitleContainer>
            <Title>¡TIENDA OFICIAL DEL CAMPITO!</Title>
            <BtnContainer>
              <BtnHero>PRODUCTOS</BtnHero>
              <BtnHero>CONTACTO</BtnHero>
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
