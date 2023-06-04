import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player'

export const Loader = () => {
  return (
    <div className="loader-container">
      <Player
        autoplay
        loop
        src="https://lottiefiles.com/65125-happy-earth-bouncing" />
    </div>
  )
}

export default Loader