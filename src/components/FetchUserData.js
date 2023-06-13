/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-underscore-dangle */
import { useEffect } from 'react';
import { user } from 'reducers/user';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from 'utils/urls';

const FetchUserData = () => {
  const accessToken = useSelector((store) => store.user.accessToken)
  // const dailyScore = useSelector((store) => store.user.dailyScore)
  const userId = useSelector((store) => store.user.userId)
  const dispatch = useDispatch()

  useEffect(() => {
    if (userId) {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // eslint-disable-next-line quote-props, quotes
          "Authorization": accessToken

        }
      }
      fetch(API_URL(`users/${userId}`), options)
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            dispatch(user.actions.setFirstName(data.response.firstName));
            dispatch(user.actions.setLastName(data.response.lastName));
            dispatch(user.actions.setEmail(data.response.email));
            // The setting of the id from the response is different from the login form
            // because how the responses are constructed (in login "id", here "_id")
            dispatch(user.actions.setUserId(data.response._id));
            dispatch(user.actions.setAccessToken(data.response.accessToken));
            dispatch(user.actions.setError(null));
            console.log('Data from user fetch', data)
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
    }
  }, []) // Fetches once when logging in, dailyScore and totalScore seems to get updated correctly

  return null
}

export default FetchUserData