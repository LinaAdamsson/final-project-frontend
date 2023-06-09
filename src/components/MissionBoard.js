/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Popup from 'reactjs-popup';
import { missions } from 'reducers/missions';
import { user } from 'reducers/user';
import { API_URL } from 'utils/urls';
import { MissionCardBack, MissionCardFront } from 'styles/MissionCard';
import { Button } from 'styles/FormStyle';
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

  // Randomize the objects in the array on login
  const getRandomIndices = (max, count) => {
    const indices = [];
    const availableIndices = Array.from({ length: max }, (_, index) => index);
    while (indices.length < count) {
      const randomIndex = Math.floor(Math.random() * availableIndices.length);
      const selectedIndex = availableIndices.splice(randomIndex, 1)[0];
      indices.push(selectedIndex);
    }
    return indices;
  }

  // Fetch missions
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line quote-props, quotes
        "Authorization": accessToken

      }
    }
    // setLoading(true)
    fetch(API_URL('missions'), options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Randomize and show 12 objects from the array
          const allItems = data.response
          const totalItems = allItems.length
          const selectedIndices = getRandomIndices(totalItems, 12)
          const selectedItems = selectedIndices.map((index) => allItems[index])

          dispatch(missions.actions.setMissionItems(selectedItems));
          dispatch(missions.actions.setError(null));
        } else {
          dispatch(missions.actions.setMissionItems([]));
          dispatch(missions.actions.setError(data));
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [accessToken, dispatch])

  console.log('Missions data', missionItems)

  // Collect points from missions
  const collectPoints = (missionId) => {
    // missionId.preventDefault()
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
              // <MissionCardWrapper
            // onClick={() => cardFlipOnClick(mission._id)}>
            // <MissionCardContent className={flip ? 'flip' : ''}>
              <Popup
                trigger={
                  <MissionCardFront
                    type="button">
                    {mission.title}
                    <br />
                    {mission.points}p
                  </MissionCardFront>
                }
                modal
                nested>

                {(close) => (
                  <>
                    <Button type="button" className="close" onClick={close}>
                    &times;
                    </Button>
                    <MissionCardBack>
                      <p>{mission.description}</p>
                      <Button
                        type="button"
                        onClick={() => collectPoints(mission._id)}>
                        I've done it!
                      </Button>
                    </MissionCardBack>
                  </>
                )}
              </Popup>
              //   </MissionCardContent>
              // </MissionCardWrapper>
            )
          })}
          <DailyScore />
        </>
      )}
    </>
  )
}

export default MissionBoard