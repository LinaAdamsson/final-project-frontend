import React, { useState, useEffect } from 'react';
import LoginForm from 'components/LoginForm';
import RegisterForm from 'components/RegisterForm';
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