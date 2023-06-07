import React, { useState, useEffect } from 'react';
import LoginForm from 'components/LoginForm';
import RegisterForm from 'components/RegisterForm';

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
        {showLoginForm ? (
            <>
            <h2>Login</h2>
            <LoginForm onSuccess={handleLogin} />
            <p>
                New user?{' '}
                <button onClick={handleToggleForm}>Register</button>
            </p>
            </>
        ) : (
            <>
            <h2>Register</h2>
            <RegisterForm onSuccess={handleLogin} />
            <p>
                Already have an account?{''}
                <button onClick={handleToggleForm}>Login here</button>
            </p>
            </>
        )}
    </div>
)
        };

export default IntroPage; 