import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  const onHomeButtonClick = () => {
    navigate('/');
  }
  return (
    <>
      <p>
        <Link to="/login">GO TO LOG IN</Link>
      </p>
      <p>
        <Link to="/">GO TO MAIN</Link>
      </p>
      <p className="notFound">SORRY, NOTHING HERE...</p>
      <button className="homeBtn" type="button" onClick={onHomeButtonClick}>Return to Home Page</button>
    </>
  )
}

export default NotFound