import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { user } from 'reducers/user';
import { missions } from 'reducers/missions';
import { HeaderWrapper, HeaderText } from 'styles/HeaderStyle';
import { SignOutButton } from 'styles/MainStyle';

const HeaderContact = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onSignOutButtonClick = () => {
    dispatch(user.actions.setAccessToken(null));
    dispatch(user.actions.setEmail(null));
    dispatch(user.actions.setUserId(null));
    dispatch(user.actions.setError(null));
    dispatch(missions.actions.setMissionItems([]));
    localStorage.removeItem('userId');
    localStorage.removeItem('accessToken');
    navigate('/login')
  }

  const onHomeButtonClick = () => {
    navigate('/')
  }

  return (
    <HeaderWrapper>
      <SignOutButton type="button" onClick={onHomeButtonClick}>Home</SignOutButton>
      <HeaderText>
        <h2>Guardians of the Climate</h2>
        <h1>CONTACT</h1>
      </HeaderText>
      <SignOutButton type="button" onClick={onSignOutButtonClick}>Sign out</SignOutButton>
    </HeaderWrapper>
  )
}

export default HeaderContact;