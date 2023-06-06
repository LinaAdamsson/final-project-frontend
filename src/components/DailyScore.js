import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { user } from 'reducers/user';
import { API_URL } from 'utils/urls';

const DailyScore = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const accessToken = useSelector((store) => store.user.accessToken)
  const dailyScoreData = useSelector((store) => store.user.dailyScore)
  const userId = useSelector((store) => store.user.userId)
  // const todaysDate = new Date().toISOString().split('T')[0]

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
        .then((res) => res.json())
        .then((data) => {
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
  }, [accessToken, dispatch, navigate, userId]);

  console.log('Daily score data:', dailyScoreData)
  // console.log('todays date:', todaysDate)

  return (
    dailyScoreData ? (
      <div>{dailyScoreData.message}</div>
    ) : (
      <div>No daily score available</div>
    )
  );
}

export default DailyScore