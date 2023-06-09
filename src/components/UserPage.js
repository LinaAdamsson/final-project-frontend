import React, { useEffect, useState } from 'react';
import { user } from 'reducers/user';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from 'utils/urls';
import { Loader } from './Loader';

const UserPage = () => {
  const [loading, setLoading] = useState(true)
  const accessToken = useSelector((store) => store.user.accessToken)
  //   const myFirstName = useSelector((store) => store.user.firstName)
  //   const myLastName = useSelector((store) => store.user.lastName)
  //   const myEmail = useSelector((store) => store.user.email)
  //   const myDailyScore = useSelector((store) => store.user.score)
  //   const myTotalScore = useSelector((store) => store.user.totalScore)
  const userId = useSelector((store) => store.user.userId)
  const myUser = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (!accessToken) {
      navigate('/login')
    } else if (accessToken && userId) {
      // Fetch user
      console.log('Access token in user page', accessToken)
      console.log('User id user page', userId)
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // eslint-disable-next-line quote-props, quotes
          "Authorization": accessToken

        }
      }
      setLoading(true)
      fetch(API_URL(`users/${userId}`), options)
        .then((response) => response.json())
        .then((data) => {
          console.log('Data from user fetch', data)
          if (data.success) {
            // Behöver vi dispatcha allt det här?
            dispatch(user.actions.setFirstName(data.response.firstName));
            dispatch(user.actions.setLastName(data.response.lastName));
            dispatch(user.actions.setEmail(data.response.email));
            dispatch(user.actions.setUserId(data.response.id));
            dispatch(user.actions.setAccessToken(data.response.accessToken));
            dispatch(user.actions.setError(null));
          } else {
            dispatch(user.actions.setFirstName(null));
            dispatch(user.actions.setLastName(null));
            dispatch(user.actions.setEmail(null));
            dispatch(user.actions.setUserId(null));
            dispatch(user.actions.setAccessToken(null));
            dispatch(user.actions.setError(data.response))
          }
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
    }
  }, [accessToken, dispatch, navigate, userId])

  console.log('My user data', myUser)

  return loading ? (
    <Loader />
  ) : (
    <>
      <h2>My User</h2>
      <ul>
        <li>Your name: {myUser.firstName} {myUser.lastName}</li>
        <li>Your email: {myUser.email}</li>
        <li>Your score today: {myUser.dailyScore}</li>
        <li>Your total score: {myUser.totalScore}</li>
      </ul>
    </>
  );
}

export default UserPage