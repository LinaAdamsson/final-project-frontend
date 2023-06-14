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
        <h1>Mission Possible</h1>
        <h2>HEROES ALL OVER THE GLOBE HELP SAVE OUR PLANET – ONE MISSION AT A TIME</h2>
        <br />
        {/* <p>ARE YOU READY TO ACCEPT THE CHALLENGE? </p> */}
      </IntroText>
      {showLoginForm ? (
        <>
          <LoginForm onSuccess={handleLogin} />
          <LoginRegisterWrapper
            style={{
              marginTop: '-10px',
              marginBottom: '-150px'
            }}>
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
            {/* <p>
                Already accepted the challenge?
            </p> */}
            <p>
                Already one of our heroes?
            </p>
            <Button type="button" onClick={handleToggleForm}>Log in here</Button>
          </LoginRegisterWrapper>
        </>
      )}
    </div>
  )
};

export default IntroPage;