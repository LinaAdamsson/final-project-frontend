import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { missions } from 'reducers/missions';
import { user } from 'reducers/user';
import { API_URL } from 'utils/urls';

const MissionBoard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const accessToken = useSelector((store) => store.user.accessToken);
  const missionItems = useSelector((store) => store.missions.missionItems);
  const userId = useSelector((store) => store.user.userId)
  const missionId = useSelector((store) => store.missions.missionItems)

  // Fetch missions
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken

      }
    }
    fetch(API_URL('missions'), options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          dispatch(missions.actions.setMissionItems(data.response));
          dispatch(missions.actions.setError(null));
        } else {
          dispatch(missions.actions.setMissionItems([]));
          dispatch(missions.actions.setError(data));
        }
      })
      .catch((error) => console.log(error))
  }, [accessToken, dispatch])

  // // Collect points from missions
  // useEffect(() => {
  //   const points = {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: accessToken
  //     }
  //   }
  //   fetch(API_URL(`users/${userId}/collect-points/${missionId}`), points)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.success) {
  //         dispatch(user.actions.setUserId(data.response.id))
  //         dispatch(missions.actions.setMissionItems(data.response));
  //         dispatch(missions.actions.setError(null));
  //       } else {
  //         dispatch(user.actions.setUserId(null))
  //         dispatch(missions.actions.setMissionItems([]));
  //         dispatch(missions.actions.setError(data));
  //       }
  //     })
  //     .catch((error) => console.log(error))
  // }, [accessToken, dispatch, userId, missionId, navigate])
  console.log(accessToken)
  console.log(missionItems)

  return (
    <>
      {missionItems.map((mission) => {
        return (
          // Warning: Each child in a list should have a unique "key" prop
          <section key={mission._id}>
            <p>{mission.title}</p>
            <p>{mission.description}</p>
            <p>{mission.points}</p>

          </section>
        )
      })}
    </>
  )
}

export default MissionBoard