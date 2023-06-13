/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { user } from 'reducers/user';
import { API_URL } from 'utils/urls';
import { DailyScorePointsCircle, DailyScorePrompt, DailyScoreWrapper } from 'styles/DailyScore';
import { Loader } from './Loader';

const DailyScore = () => {
  const dispatch = useDispatch()
  // const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const accessToken = useSelector((store) => store.user.accessToken)
  const dailyScore = useSelector((store) => store.user.dailyScore)
  const userId = useSelector((store) => store.user.userId)
  const todaysDate = new Date().toISOString().split('T')[0]

  useEffect(() => {
    if (accessToken) {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // eslint-disable-next-line quote-props
          'Authorization': accessToken
        }
      };
      setLoading(true)
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
        .finally(() => setLoading(false))
    }
  }, [todaysDate, userId, dailyScore]);
  console.log(`This is the userId ${userId}`)

  if (loading) {
    return <Loader />
  }
  return (
    dailyScore ? (
      <DailyScoreWrapper>
        <DailyScorePrompt>
          Your daily score is:
        </DailyScorePrompt>
        <DailyScorePointsCircle>
          <p>{dailyScore}</p>
        </DailyScorePointsCircle>
      </DailyScoreWrapper>
    ) : (
      <DailyScoreWrapper>
        <DailyScorePrompt>
          <div>No daily score available</div>
          <div>{dailyScore.message}</div>
        </DailyScorePrompt>
      </DailyScoreWrapper>
    )
  );
}

export default DailyScore