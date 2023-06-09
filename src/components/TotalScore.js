import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { user } from 'reducers/user';
import { API_URL } from 'utils/urls';
import { Loader } from './Loader';

const TotalScore = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const accessToken = useSelector((store) => store.user.accessToken)
  const totalScore = useSelector((store) => store.user.totalScore)
  const userId = useSelector((store) => store.user.userId)

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
      setLoading(true)
      fetch(API_URL(`users/${userId}/total-score`), options)
        .then((res) => res.json())
        .then((data) => {
          console.log('API Response:', data);
          if (data.success) {
            dispatch(user.actions.setTotalScore(data));
            dispatch(user.actions.setError(null));
          } else {
            dispatch(user.actions.setTotalScore([]));
            dispatch(user.actions.setError(data));
          }
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
    }
  }, [accessToken, dispatch, navigate, userId]);

  console.log('Total score data:', totalScore)

  if (loading) {
    return <Loader />
  }
  return (
    totalScore ? (
      <div> Your total score is {totalScore.response}</div>
    ) : (
      <div>No total score available. Have you completed any missions yet?</div>
    )
  );
}

export default TotalScore