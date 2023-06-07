import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { user } from 'reducers/user';
import { missions } from 'reducers/missions';
import MissionBoard from './MissionBoard';
import Loader from './Loader';

const Main = () => {
  const accessToken = useSelector((store) => store.user.accessToken);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(true) 

  // useEffect(() => {
  //   // If the user don't have an accesstoken they get directed to the login page
  //   if (!accessToken) {
  //     navigate('/login')
  //   }
  // }, [accessToken, navigate]);
  // console.log(accessToken)

  const onLogoutButtonClick = () => {
    dispatch(user.actions.setAccessToken(null));
    dispatch(user.actions.setEmail(null));
    dispatch(user.actions.setUserId(null));
    dispatch(user.actions.setError(null));
    dispatch(missions.actions.setMissionItems([]));
  }

  return (
    <>
     {isLoading ? <Loader /> : (<> {accessToken === '' ? <LoginForm /> : <Main />} </>)}
      <button type="button" onClick={onLogoutButtonClick}>Logout</button>
      <MissionBoard />
    </>
  )
}

export default Main