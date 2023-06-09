import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { user } from 'reducers/user'
import { missions } from 'reducers/missions'
import { API_URL } from 'utils/urls'
import { Loader } from './Loader'

export const CollectPoints = (missionId) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true)
  const accessToken = useSelector((store) => store.user.accessToken);
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      // eslint-disable-next-line quote-props
      'Authorization': accessToken
    }
  }
  setLoading(true)
  fetch(API_URL(`missions/collect-points/${missionId}`), options)
    .then((response) => response.json())
    .then((data) => {
      console.log('data from patch request', data)
      if (data.success) {
        dispatch(user.actions.setScore(data.response));
        // data.response i backenden är collectedMissionPoints som är ett objekt
        dispatch(missions.actions.setError(null));
      } else {
        dispatch(user.actions.setScore([]));
        dispatch(missions.actions.setError(data));
      }
    })
    .catch((error) => console.log(error))
    .finally(() => setLoading(false))

  if (loading) {
    return <Loader />
  }

  return (
    <div>CollectPoints</div>
  )
}
