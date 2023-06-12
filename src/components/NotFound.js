import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar } from 'styles/AvatarStyle';

const NotFound = () => {
  const navigate = useNavigate();
  const onHomeButtonClick = () => {
    navigate('/');
  }
  return (
    <>
      <Avatar src="https://lh3.googleusercontent.com/_sc4YA0LUVLjvaEo53xNsMzOliSzChCbFmcRQz1pLlxh6s8onKxf9fnXynT8V3YmXXp45ecPGZCiDJqsLq45zm2ioFhTfZtvenw99BFPinQvH4vytbpnOj7PxZU86F7vwUe5ALLoPQ=w2400" alt="avatar" />
      {/* <Avatar src="https://lh3.googleusercontent.com/V6pAEpCfUgRbBB3JVnRKUNAu-a2YVlXDWsZPAEKEQ027xjvxq6UwP-dp5rAZx4_B83h73QdVYT7u-wnNgdHl0Ct5aQIwsoUblqrKUnwELg-dvA8id4xMzs01uSsjkPS4G8oRiMxh3g=w2400" alt="avatar" /> */}
      <p>
        <Link to="/login">GO TO LOGIN</Link>
      </p>
      <p>
        <Link to="/">GO TO MAIN</Link>
      </p>
      <p className="notFound">Sorry, nothing here...</p>
      <button className="homeBtn" type="button" onClick={onHomeButtonClick}>Return to Home Page</button>
    </>
  )
}

export default NotFound