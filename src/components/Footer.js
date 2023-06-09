import React from 'react'
import { FooterContainer, FooterText, FooterImage } from 'styles/FooterStyle'
import CloudsFooter from 'assets/footer.png'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
          Made by Andrea Hedström, Frida Nordenlöw,
          Lina Adamsson, Emilia Saberski
        {/* <p>Students at Technigo Web Development Boot Camp, Spring 2023</p> */}
      </FooterText>
      <FooterImage src={CloudsFooter} alt="clouds" />
    </FooterContainer>

  )
}

export default Footer;