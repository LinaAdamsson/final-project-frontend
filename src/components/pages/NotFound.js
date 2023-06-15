import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components/macro';
import { HeaderWrapper, HeaderText } from 'styles/HeaderStyle';
import { UserText } from 'styles/HeroProfileStyle';
import { Button } from 'styles/FormStyle.js'

const NotFound = () => {
  const navigate = useNavigate();
  const onHomeButtonClick = () => {
    navigate('/');
  }
  return (
    <HeaderWrapper>
      <HeaderText>
        <h2>Guardians of the Climate</h2>
        <NotFoundText>Sorry, nothing here...</NotFoundText>
      </HeaderText>
      <Button className="homeBtn" type="button" onClick={onHomeButtonClick}>Return to Home Page</Button>
    </HeaderWrapper>
  )
}

export default NotFound

const NotFoundText = styled(UserText)`
  font-weight: 400;
  font-size: 18px;
  text-align: center;
`