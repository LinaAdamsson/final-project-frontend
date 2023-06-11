import React, { useState, useEffect } from 'react';
import LoginForm from 'components/LoginForm';
import RegisterForm from 'components/RegisterForm';
import { Avatar } from 'styles/AvatarStyle';
import { Planet } from 'styles/PlanetStyle';
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
      <Planet src="https://lh3.googleusercontent.com/U4ss0tLqB8G_bGeYhbAOewyGW25VrveeWXKsdHPzTGa_QD6rTlZcBHjQ1jH01MyvKsKn_c2YluGgLZaCsUgMWD1NaI8Zv1TV9U2mMHPvghWNljflFNu3xTqZ-4R0tawUvCpBGKTZ2A=w2400" alt="planet" />
      <Avatar src="https://lh3.googleusercontent.com/_0iKG-ssXTtP7Xei8wHoAQndbKvbr9lxtWw97-6AmN6lOFJ-vUj7U3B90JTCGXWOVOxx7XUYfX2RlyHKBh-DwcFgKMFS0rk6tECTrKAmTuypssGcGwd2_XbBcNK-2C4QxLJQ8z85Xg=w2400" alt="avatar" />
      {/* <Avatar src="https://lh3.googleusercontent.com/fd4G2VpauOVpTMbQrQPAuXDkSGSXhaFDMT3-gyAzFuJCP_sPOthfsiOUDPMWOgsbG2D764fIhCvfVPJpksHMqDLcE4BWKhPOhu8C8mTdT-PeR1y5hc3rLd4DXrgFVHXRQqpnIxrnRA=w2400" alt="avatar" /> */}
      {/* <Avatar src="https://lh3.googleusercontent.com/_sc4YA0LUVLjvaEo53xNsMzOliSzChCbFmcRQz1pLlxh6s8onKxf9fnXynT8V3YmXXp45ecPGZCiDJqsLq45zm2ioFhTfZtvenw99BFPinQvH4vytbpnOj7PxZU86F7vwUe5ALLoPQ=w2400" alt="avatar" /> */}
      {/* <Avatar src="https://lh3.googleusercontent.com/V6pAEpCfUgRbBB3JVnRKUNAu-a2YVlXDWsZPAEKEQ027xjvxq6UwP-dp5rAZx4_B83h73QdVYT7u-wnNgdHl0Ct5aQIwsoUblqrKUnwELg-dvA8id4xMzs01uSsjkPS4G8oRiMxh3g=w2400" alt="avatar" /> */}
      <IntroText>
        <h2>TIME TO HELP THE PLANET</h2>
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