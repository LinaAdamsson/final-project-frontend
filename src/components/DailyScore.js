import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { user } from 'reducers/user';
import { API_URL } from 'utils/urls';
import { Loader } from './Loader';

const DailyScore = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const accessToken = useSelector((store) => store.user.accessToken)
  const score = useSelector((store) => store.user.score)
  const userId = useSelector((store) => store.user.userId)
  const todaysDate = new Date().toISOString().split('T')[0]

  useEffect(() => {
    if (!accessToken) {
      navigate('/login');
    } else if (accessToken) { // Check if userId is available
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // eslint-disable-next-line quote-props
          'Authorization': accessToken
        }
      };
      // fetch(API_URL(`users/${userId}/score/2023-06-06`), options)
      setLoading(true)
      fetch(API_URL(`users/${userId}/score/${todaysDate}`), options)
        .then((res) => res.json())
        .then((data) => {
          console.log('API Response:', data);
          if (data.success) {
            dispatch(user.actions.setScore(data));
            dispatch(user.actions.setError(null));
          } else {
            dispatch(user.actions.setScore([]));
            dispatch(user.actions.setError(data));
            console.log('Data from fetch:', data);
          }
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
    }
  }, [accessToken, dispatch, navigate, todaysDate, userId]);

  console.log('User id:', userId)
  console.log('Daily score data:', score)

  if (loading) {
    return <Loader />
  }
  return (
    <>
      <h1>{score.response}</h1>
      <h2>{score.message}</h2>
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