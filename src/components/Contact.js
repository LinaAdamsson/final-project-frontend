import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { MainContainer } from 'styles/MainStyle';
import { Footer } from './Footer';

export const Contact = () => {
  return (
    <>
      <MainContainer>
        <a href="/">Back to home</a>
        <p>Lina Adamsson</p>
        {/* <img src="https://media.licdn.com/dms/image/D4D03AQFjKrqQjN529Q/profile-displayphoto-shrink_800_800/0/1682287521490?e=1692230400&v=beta&t=sO8-z4N0P48N5vzK0Ve5HJEpZ2arnOuZll2MyDONQ7E" alt="Lina Adamsson" /> */}
        <a href="https://github.com/LinaAdamsson">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/lina-adamsson/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <p>Andrea Hedström</p>
        <a href="https://github.com/AndreaHedstrom">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/andrea-hedstr%C3%B6m-3549a516b/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <p>Frida Nordenlöw</p>
        <a href="https://github.com/fridanordenlow">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/fridanordenlow/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <p>Emilia Saberski</p>
        <a href="https://github.com/emiliasaberski">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/emiliasaberski/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </MainContainer>
      <Footer />
    </>
  )
}
