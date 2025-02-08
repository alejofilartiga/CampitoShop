import Form from "./Form/Form"

import {ContactSection, FormContainer, FormTitle, RightContainer, RightTitle } from "./contactStyle"

function Contact() {
  return (
    <>
      <ContactSection>
        <FormContainer>
          <FormTitle>CONTACTANOS</FormTitle>
          <Form/>
        </FormContainer>
        <RightContainer>
          <RightTitle>UBICANOS</RightTitle>
          <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.781982629488!2d-58.51087982452314!3d-34.63494935914767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc979fcbc5a39%3A0xa8242f53b3298ebb!2sDeportivo%20Campito!5e0!3m2!1ses-419!2sar!4v1738728888050!5m2!1ses-419!2sar"></iframe>
        </RightContainer>
      </ContactSection>
    </>
  )
}

export default Contact
