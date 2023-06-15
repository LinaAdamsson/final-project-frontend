import React, { useEffect, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player'
import styled from 'styled-components/macro';
import { UserText } from 'styles/HeroProfileStyle';
import { MainContainer } from 'styles/MainStyle';

const Loader = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 4000);
    }
  }, [loading]);

  return (
    <MainContainer>
      <Player
        autoplay
        loop
        // src="https://assets9.lottiefiles.com/private_files/lf30_rgtaqeww.json"
        src="https://assets8.lottiefiles.com/private_files/lf30_rwpu0mow.json"
        style={{ height: '200px', width: '200px' }} />
      <LoaderText>Hold on, the page is loading...</LoaderText>
    </MainContainer>

  )
}

export default Loader

const LoaderText = styled(UserText)`
  font-weight: 400;
  font-size: 18px;
  text-align: center;
`