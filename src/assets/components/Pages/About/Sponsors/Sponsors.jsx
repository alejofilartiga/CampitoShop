import Afa from "./img/afa.png"
import Lpf from "./img/lpf.png"
import Kabro from "./img/kabro.png"
import Quilmes from "./img/quilmes.png"
import Samsung from "./img/samsung.png"
import Ypf from "./img/ypf.png"
import Axe from "./img/axe.png"
import Chevallier from "./img/chevallier.png"


import {
  SponsorsSection,
  SponsorsContainer,
  ImageContainer,
  ImageSponsor,
  LigaContainer,
  AfaImage,
  Tittle
} from "./sponsorsStyle"


function Sponsors() {
  return (
    <>
      <SponsorsSection>
        <Tittle>¡AGRADECEMOS A NUESTROS SPONSORS!</Tittle>
        <SponsorsContainer>
          <ImageContainer>
            <ImageSponsor src={Kabro} alt="Kabro" />
          </ImageContainer>
          <ImageContainer>
            <ImageSponsor src={Quilmes} alt="Quilmes" />
          </ImageContainer>
          <ImageContainer>
            <ImageSponsor src={Samsung} alt="Samsung" />
          </ImageContainer>
          <ImageContainer>
            <ImageSponsor src={Ypf} alt="Ypf" />
          </ImageContainer>
          <ImageContainer>
            <ImageSponsor src={Axe} alt="Axe" />
          </ImageContainer>
          <ImageContainer>
            <ImageSponsor src={Chevallier} alt="Chevallier" />
          </ImageContainer>
    
        </SponsorsContainer>
        <LigaContainer>
            <AfaImage src={Afa} />
            <AfaImage src={Lpf} />
        </LigaContainer>
      </SponsorsSection>
    </>
  )
}

export default Sponsors
