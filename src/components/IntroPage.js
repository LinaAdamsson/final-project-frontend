import React, { useState, useEffect } from 'react';
import LoginForm from 'components/LoginForm';
import RegisterForm from 'components/RegisterForm';
import { Avatar } from 'styles/AvatarStyle';
// import Loader from 'components/Loader';
import { IntroText } from 'styles/StartPage';
import { Button } from 'styles/FormStyle';

const IntroPage = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn === 'true') {
      setShowLoginForm(false);
    }
  }, []);

  const handleToggleForm = () => {
    setShowLoginForm(!showLoginForm)
  };

  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');
  };

  return (
    <div>
      {/* <Loader /> */}
      <Avatar src="https://lh3.googleusercontent.com/fd4G2VpauOVpTMbQrQPAuXDkSGSXhaFDMT3-gyAzFuJCP_sPOthfsiOUDPMWOgsbG2D764fIhCvfVPJpksHMqDLcE4BWKhPOhu8C8mTdT-PeR1y5hc3rLd4DXrgFVHXRQqpnIxrnRA=w2400" alt="avatar" />
      {/* <img src="https://lh3.googleusercontent.com/_sc4YA0LUVLjvaEo53xNsMzOliSzChCbFmcRQz1pLlxh6s8onKxf9fnXynT8V3YmXXp45ecPGZCiDJqsLq45zm2ioFhTfZtvenw99BFPinQvH4vytbpnOj7PxZU86F7vwUe5ALLoPQ=w2400" alt="avatar" /> */}
      <IntroText>
        <h2>Time to help the planet...</h2>
      </IntroText>
      {showLoginForm ? (
        <>
          <LoginForm onSuccess={handleLogin} />
          <p>
                New user?{' '}
            <Button type="button" onClick={handleToggleForm}>Register</Button>
          </p>
        </>
      ) : (
        <>
          <RegisterForm onSuccess={handleLogin} />
          <p>
                Already have an account?
            <Button type="button" onClick={handleToggleForm}>Log in here</Button>
          </p>
        </>
      )}
    </div>
  )
};

export default IntroPage;