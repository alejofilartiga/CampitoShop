import {AboutSection, InfoContainer, AboutTitle, AboutInfo, AboutButton, ImageContainer, ImageAbout} from "./aboutStyle"
import AbtHome from "./img/abthome.png"
import { Link } from 'react-router-dom';

function AboutHome() {
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
          <Link to='/about'>
            <AboutButton>MÁS INFORMACION</AboutButton>
          </Link>
        </InfoContainer>
        <ImageContainer>
          <ImageAbout src={AbtHome} />
        </ImageContainer>
      </AboutSection>
    </>
  )
}

export default AboutHome
