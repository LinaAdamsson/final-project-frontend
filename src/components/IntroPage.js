import React, { useState, useEffect } from 'react';
import LoginForm from 'components/LoginForm';
import RegisterForm from 'components/RegisterForm';
import { Avatar } from 'styles/AvatarStyle';
import { Planet } from 'styles/PlanetStyle';
// import Loader from 'components/Loader';
import { IntroText, LoginRegisterWrapper, IntroImage } from 'styles/StartPage';
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
      <IntroImage>
        <Avatar src="/Images/Hero.png" alt="avatar" />
        <Planet src="/Images/globe.png" alt="planet" />
      </IntroImage>
      <IntroText>
        <h2>TODAY&apos;S MISSION:</h2>
        <h2>Time to help the planet!</h2>
      </IntroText>
      {showLoginForm ? (
        <>
          <LoginForm onSuccess={handleLogin} />
          <LoginRegisterWrapper>
            <p>
                Ready to accept the challenge?{' '}
            </p>
            <Button type="button" onClick={handleToggleForm}>Register</Button>
          </LoginRegisterWrapper>
        </>
      ) : (
        <>
          <RegisterForm onSuccess={handleLogin} />
          <LoginRegisterWrapper>
            <p>
                Already accepted the challenge?
            </p>
            <Button type="button" onClick={handleToggleForm}>Log in here</Button>
          </LoginRegisterWrapper>
        </>
      )}
    </div>
  )
};

export default IntroPage;