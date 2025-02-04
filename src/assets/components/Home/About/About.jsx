import {AboutSection, InfoContainer, AboutTitle, AboutInfo, AboutButton, ImageContainer, ImageAbout} from "./aboutStyle"

import AbtHome from "./img/abthome.png"
function About() {
  return (
    <>
      <AboutSection>
        <InfoContainer>
          <AboutTitle>CONOCÉ NUESTRA HISTORIA</AboutTitle>
            <AboutInfo>Somos un humilde club de amigos 
                        ubicado en Villa Luro y fundado el 
                        1 de Octubre de 2021. Nuestros socios 
                        fundadores son actualmente parte 
                        del plantel que disputa sus encuentros
                        en el Campito Delfo Cabrera, en la calle
                        Irigoyen. Unite a nuestra pasion y llevala a todos lados.
          </AboutInfo>
          <AboutButton>MÁS INFORMACION</AboutButton>
        </InfoContainer>
        <ImageContainer>
          <ImageAbout src={AbtHome} />
        </ImageContainer>
      </AboutSection>
    </>
  )
}

export default About
