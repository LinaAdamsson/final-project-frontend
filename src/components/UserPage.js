/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { user } from 'reducers/user';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from 'utils/urls';
import { Avatar } from 'styles/AvatarStyle';
// import { Button } from 'styles/FormStyle';
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

  // Någonting är fel här
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
            dispatch(user.actions.setFirstName(data.response.firstName));
            dispatch(user.actions.setLastName(data.response.lastName));
            dispatch(user.actions.setEmail(data.response.email));
            dispatch(user.actions.setUserId(data.response.id));
            dispatch(user.actions.setAccessToken(data.response.accessToken));
            dispatch(user.actions.setError(null));
            console.log('My user id', userId)
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

  /* const onBackButtonClick = () => {
    navigate('/')
  } */

  // Ändra strukturen så att den liknar andra komponenter
  return loading ? (
    <Loader />
  ) : (
    <>
      <Avatar src="https://lh3.googleusercontent.com/_0iKG-ssXTtP7Xei8wHoAQndbKvbr9lxtWw97-6AmN6lOFJ-vUj7U3B90JTCGXWOVOxx7XUYfX2RlyHKBh-DwcFgKMFS0rk6tECTrKAmTuypssGcGwd2_XbBcNK-2C4QxLJQ8z85Xg=w2400" alt="avatar" />
      <h2>Super{myUser.firstName}</h2>
      <ul>
        <li>Your real name: {myUser.firstName} {myUser.lastName}</li>
        {/* <li>Your email: {myUser.email}</li> */}
        <li>Hero points today: {myUser.dailyScore}</li>
        <li>Total hero score: {myUser.totalScore}</li>
      </ul>
    </>
  );
}

export default UserPage