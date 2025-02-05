import Estrella from "./img/estrella.png"
import Feature1 from "./img/feature1.png"
import Feature2 from "./img/feature2.png"
import Feature3 from "./img/feature3.png"

import { Link } from "react-router-dom"

import { FeatureSection, 
         TitleContainer,
         TitleImg,
         Title,
         FeaturesContainer,
         FeaturesImg,
         FeatureBtn

 } from "./featureStyle"  

function Features() {
  return (
    <>
      <FeatureSection>
        <TitleContainer>
          <TitleImg src={Estrella} />
          <Title>LOS DESTACADOS</Title>
        </TitleContainer>
        <FeaturesContainer>
          <FeaturesImg src={Feature1} />
          <FeaturesImg src={Feature2} />
          <FeaturesImg src={Feature3} />
        </FeaturesContainer>
        <Link to='/products'><FeatureBtn>TODOS LOS PRODUCTOS</FeatureBtn></Link>
      </FeatureSection>
    </>
  )
}

export default Features
