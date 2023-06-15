import React, { useEffect, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player'

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
    <div className="loader-container">
      <Player
        autoplay
        loop
        // src="https://assets9.lottiefiles.com/private_files/lf30_rgtaqeww.json"
        src="https://assets8.lottiefiles.com/private_files/lf30_rwpu0mow.json"
        style={{ height: '200px', width: '200px' }} />
      <p className="loader-message">Hold on, the page is loading...</p>
    </div>
  )
}

export default Loader