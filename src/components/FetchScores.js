/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { loading } from 'reducers/loading';
import { user } from 'reducers/user';
import { API_URL } from 'utils/urls';

const FetchScores = () => {
  const dispatch = useDispatch()
  const accessToken = useSelector((store) => store.user.accessToken)
  const dailyScore = useSelector((store) => store.user.dailyScore)
  const totalScore = useSelector((store) => store.user.totalScore)
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
      // dispatch(loading.actions.setLoading(true))
      fetch(API_URL(`users/${userId}/score/${todaysDate}`), options)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            dispatch(user.actions.setDailyScore(data.response));
            dispatch(user.actions.setError(null));
            console.log('Fetched daily score:', dailyScore);
          } else {
            dispatch(user.actions.setDailyScore(0));
            dispatch(user.actions.setError(data));
          }
        })
        .catch((error) => console.log(error));

      fetch(API_URL(`users/${userId}/total-score`), options)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            dispatch(user.actions.setTotalScore(data.response));
            dispatch(user.actions.setError(null));
            console.log('Fetched total score:', totalScore)
          } else {
            dispatch(user.actions.setTotalScore(0));
            dispatch(user.actions.setError(data));
          }
        })
        .catch((error) => console.log(error))
        // .finally(() => dispatch(loading.actions.setLoading(false)))
    }
  }, [dailyScore, accessToken]);

  return null
}

export default FetchScores