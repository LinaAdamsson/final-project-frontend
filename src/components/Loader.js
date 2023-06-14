import React, { useEffect, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player'

export const Loader = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [loading]);

  return (
    <div className="loader-container">
      <Player
        autoplay
        loop
        src="https://assets8.lottiefiles.com/temp/lf20_R4avlk.json"
        // src="https://assets9.lottiefiles.com/private_files/lf30_rgtaqeww.json"
        // src="https://assets8.lottiefiles.com/private_files/lf30_rwpu0mow.json"
        style={{ height: '200px', width: '200px' }} />
      <p className="loader-message">Hold on, page is loading</p>
    </div>
  )
}

export default Loader