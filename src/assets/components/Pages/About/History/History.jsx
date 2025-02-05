import Frontal from "./img/frontal.jpg"
import Dorsal from "./img/dorsal.jpg"

import {HistorySection, InfoContainer, InfoTitle, Info, ImageContainer, Image} from "./historyStyle"



function History() {
  return (
    <>
      <HistorySection>
        <InfoContainer>
          <InfoTitle>ADN CAMPITO</InfoTitle>
            <Info>Creado por un grupo de amigos en una plaza de Villa Luro, comenzó como un pasatiempo y se convirtió en un deseo que fue más allá. Alejo, Nahuel, Lucas y Felipe, como fundadores, decidieron crear un club, simulando todo lo que implica uno en la vida real.
            </Info>
            <Info>Con el tiempo, se sumaron más amigos y se creó un plantel de 20 jugadores, que disputan partidos en el Campito Delfo Cabrera, en la calle Irigoyen. El club se convirtió en un espacio de encuentro y diversión, donde se comparte la pasión por el fútbol y se disfruta de la amistad.
            </Info>
            <Info>
            Aunque haya sido un proyecto a corto plazo, nunca olvidaremos los grandes momentos que pasamos jugando a la pelota en aquella plaza rodeada de calles y una avenida, donde cada pelota que se escapaba era un peligro.
            </Info>
            <Info>
            Siempre recordaremos esta gran etapa y la conexión que nos dio para seguir disfrutando de nuestra amistad.
            </Info>
        </InfoContainer>
        <ImageContainer>
          <Image src={Frontal}/>
          <Image src={Dorsal}/>
        </ImageContainer>
      </HistorySection>
    </>
  )
}

export default History
