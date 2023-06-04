import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { missions } from 'reducers/missions';
import { API_URL } from 'utils/urls';

const MissionBoard = () => {
  const dispatch = useDispatch();
  const missionItems = useSelector((store) => store.missions.missionItems);
  const accessToken = useSelector((store) => store.user.accessToken);
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
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          dispatch(missions.actions.setMissionItems(data.response));
          dispatch(missions.actions.setError(null));
        } else {
          dispatch(missions.actions.setMissionItems([]));
          dispatch(missions.actions.setError(data.response));
        }
      })
      .catch((error) => console.log(error))
  }, [accessToken, dispatch])
  console.log(accessToken)
  return (
    <>
      {missionItems.map((mission) => {
        return (
          <section key={mission.id}>
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