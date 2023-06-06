import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { missions } from 'reducers/missions';
import { API_URL } from 'utils/urls';

const MissionBoard = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.accessToken);
  const missionItems = useSelector((store) => store.missions.missionItems);

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
  console.log(accessToken)
  console.log(missionItems)
  return (
    <>
      {missionItems.map((mission) => {
        return (
          // Warning: Each child in a list should have a unique "key" prop
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