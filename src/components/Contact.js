import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Lina from 'assets/Lina.png';
import Andrea from 'assets/Andrea.png';
import Frida from 'assets/Frida.png';
import Emilia from 'assets/Emilia.png';
import { ContactContainer, ContactWrapper, HeroImg, Links } from 'styles/ContactStyle';
import { Footer } from './Footer';

export const Contact = () => {
  return (
    <>
      <ContactContainer>
        <ContactWrapper>
          <HeroImg src={Lina} alt="Lina hero" />
          <p>Lina Adamsson</p>
          <Links>
            <a href="https://github.com/LinaAdamsson">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/lina-adamsson/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </Links>
        </ContactWrapper>
        <ContactWrapper>
          <HeroImg src={Andrea} alt="Andrea hero" />
          <p>Andrea Hedström</p>
          <Links>
            <a href="https://github.com/AndreaHedstrom">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/andrea-hedstr%C3%B6m-3549a516b/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </Links>
        </ContactWrapper>
        <ContactWrapper>
          <HeroImg src={Frida} alt="Frida hero" />
          <p>Frida Nordenlöw</p>
          <Links>
            <a href="https://github.com/fridanordenlow">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/fridanordenlow/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </Links>
        </ContactWrapper>
        <ContactWrapper>
          <HeroImg src={Emilia} alt="Emilia hero" />
          <p>Emilia Saberski</p>
          <Links>
            <a href="https://github.com/emiliasaberski">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/emiliasaberski/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </Links>
        </ContactWrapper>
      </ContactContainer>
      <Footer />
    </>
  )
}
