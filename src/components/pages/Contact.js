import React from 'react'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Lina from 'assets/Lina.png';
import Andrea from 'assets/Andrea.png';
import Frida from 'assets/Frida.png';
import Emilia from 'assets/Emilia.png';
import { ContactContainer, ContactText, ContactWrapper, ContactTextWrapper, HeroImg, Icons, Links } from 'styles/ContactStyle';
import Footer from '../Footer';
import HeaderContact from '../HeaderContact';

const Contact = () => {
  return (
    <>
      <HeaderContact />
      <ContactContainer>
        <ContactWrapper>
          <HeroImg src={Lina} alt="Lina hero" />
          <ContactTextWrapper>
            <ContactText>Lina Adamsson</ContactText>
            <Links>
              <a href="https://github.com/LinaAdamsson">
                <Icons icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/lina-adamsson/">
                <Icons icon={faLinkedin} />
              </a>
            </Links>
          </ContactTextWrapper>
        </ContactWrapper>
        <ContactWrapper>
          <HeroImg src={Andrea} alt="Andrea hero" />
          <ContactTextWrapper>
            <ContactText>Andrea Hedström</ContactText>
            <Links>
              <a href="https://github.com/AndreaHedstrom">
                <Icons
                  icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/andrea-hedstr%C3%B6m-3549a516b/">
                <Icons icon={faLinkedin} />
              </a>
            </Links>
          </ContactTextWrapper>
        </ContactWrapper>
        <ContactWrapper>
          <HeroImg src={Frida} alt="Frida hero" />
          <ContactTextWrapper>
            <ContactText>Frida Nordenlöw</ContactText>
            <Links>
              <a href="https://github.com/fridanordenlow">
                <Icons icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/fridanordenlow/">
                <Icons icon={faLinkedin} />
              </a>
            </Links>
          </ContactTextWrapper>
        </ContactWrapper>
        <ContactWrapper>
          <HeroImg src={Emilia} alt="Emilia hero" />
          <ContactTextWrapper>
            <ContactText>Emilia Saberski</ContactText>
            <Links>
              <a href="https://github.com/emiliasaberski">
                <Icons icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/emiliasaberski/">
                <Icons icon={faLinkedin} />
              </a>
            </Links>
          </ContactTextWrapper>
        </ContactWrapper>
      </ContactContainer>
      <Footer />
    </>
  )
}

export default Contact;