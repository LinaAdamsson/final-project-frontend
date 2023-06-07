import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { user } from 'reducers/user';
import { API_URL } from 'utils/urls';

const DailyScore = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const accessToken = useSelector((store) => store.user.accessToken)
  const dailyScore = useSelector((store) => store.user.dailyScore)
  const userId = useSelector((store) => store.user.userId)
  const todaysDate = new Date().toISOString().split('T')[0]

  useEffect(() => {
    if (!accessToken) {
      navigate('/login');
    } else if (userId) { // Check if userId is available
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: accessToken
        }
      };
      fetch(API_URL(`users/${userId}/score/2023-06-06`), options)
      // fetch(API_URL(`users/${userId}/score/${todaysDate}`), options)
        .then((res) => res.json())
        .then((data) => {
          console.log('API Response:', data); // There is no API response, suggesting that the fetch is not executed
          if (data.success) {
            dispatch(user.actions.setDailyScore(data));
            dispatch(user.actions.setError(null));
          } else {
            dispatch(user.actions.setDailyScore([]));
            dispatch(user.actions.setError(data));
            console.log('Data from fetch:', data);
          }
        });
    }
  }, [accessToken, dispatch, navigate, todaysDate, userId]);

  console.log('User id:', userId)
  console.log('Daily score data:', dailyScore)
  console.log('todays date:', todaysDate)

  return (
    <>
      <h1>{dailyScore.response}</h1>
      <h2>{dailyScore.message}</h2>
    </>
  );

  // return (
  //   dailyScore ? (
  //     <div>{dailyScore.message}</div>
  //   ) : (
  //     <div>No daily score available</div>
  //   )
  // );
}

export default DailyScore