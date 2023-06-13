/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { user } from 'reducers/user';
import { API_URL } from 'utils/urls';

const FetchDailyScore = () => {
  const dispatch = useDispatch()
  const accessToken = useSelector((store) => store.user.accessToken)
  const dailyScore = useSelector((store) => store.user.dailyScore)
  const userId = useSelector((store) => store.user.userId)
  const todaysDate = new Date().toISOString().split('T')[0]

  useEffect(() => {
    if (accessToken && userId) {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // eslint-disable-next-line quote-props
          'Authorization': accessToken
        }
      };
      fetch(API_URL(`users/${userId}/score/${todaysDate}`), options)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            dispatch(user.actions.setDailyScore(data.response));
            dispatch(user.actions.setError(null));
            console.log('Daily score:', dailyScore);
          } else {
            dispatch(user.actions.setDailyScore(0));
            dispatch(user.actions.setError(data));
          }
        })
        .catch((error) => console.log(error))
    }
  }, [dailyScore]);

  return null
}

export default FetchDailyScore