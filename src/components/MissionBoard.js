/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { missions } from 'reducers/missions';
import { user } from 'reducers/user';
import { API_URL } from 'utils/urls';
import { MissionCardContainer, MissionCardContainerBack, MissionCardWrapper } from 'styles/MissionCard';
import { Loader } from './Loader';
import DailyScore from './DailyScore';

const MissionBoard = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true)
  const accessToken = useSelector((store) => store.user.accessToken);
  const missionItems = useSelector((store) => store.missions.missionItems);

  // Test
  // useEffect(() => {
  //   console.log('MissionBoard re-rendered');
  // });

  // Fetch missions
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken

      }
    }
    setLoading(true)
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
      .finally(() => setLoading(false))
  }, [accessToken, dispatch])

  // Collect points from missions
  const collectPoints = (missionId) => {
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
  }

  // Create a function that takes the missionId as an argument

  // When someone clicks a mission you will have access to that specific id
  if (loading) {
    return <Loader />
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {missionItems.map((mission) => {
            return (
              <MissionCardWrapper>
                <MissionCardContainer key={mission._id}>
                  <p>{mission.title}</p>
                  <MissionCardContainerBack>
                    <p>{mission.description}</p>
                    <p>{mission.points}</p>
                    <input
                      type="checkbox"
                      // eslint-disable-next-line no-underscore-dangle
                      onChange={() => collectPoints(mission._id)} />
                  </MissionCardContainerBack>
                </MissionCardContainer>
              </MissionCardWrapper>
            )
          })}
          <DailyScore />
        </>
      )}
    </>
  )
}

export default MissionBoard