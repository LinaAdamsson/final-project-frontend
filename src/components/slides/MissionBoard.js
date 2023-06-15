/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Popup from 'reactjs-popup';
import { missions } from 'reducers/missions';
import { user } from 'reducers/user';
import { API_URL } from 'utils/urls';
import { MissionCardBack, MissionCardFront, PopupModal, CloseButton, MissionCardContainer } from 'styles/MissionBoardStyle';
import { Button } from 'styles/FormStyle';
import Loader from '../Loader';

const MissionBoard = () => {
  const dispatch = useDispatch();
  const [disabledStates, setDisabledStates] = useState({});
  const [loading, setLoading] = useState(false);
  const accessToken = useSelector((store) => store.user.accessToken);
  const missionItems = useSelector((store) => store.missions.missionItems);

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
    if (accessToken) {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // eslint-disable-next-line quote-props, quotes
          "Authorization": accessToken
        }
      }
      setLoading(true)
      fetch(API_URL('missions'), options)
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            const allItems = data.response
            const totalItems = allItems.length
            const selectedIndices = getRandomIndices(totalItems, 8)
            const selectedItems = selectedIndices.map((index) => allItems[index])

            dispatch(missions.actions.setMissionItems(selectedItems));
            dispatch(missions.actions.setError(null));
          } else {
            dispatch(missions.actions.setMissionItems([]));
            dispatch(missions.actions.setError(data));
          }
        })
        .catch((e) => console.log(e))
        .finally(() => setLoading(false))
    }
  }, [accessToken])

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
    fetch(API_URL(`missions/collect-points/${missionId}`), options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          dispatch(user.actions.setDailyScore(data.response.points));
          dispatch(user.actions.setTotalScore(data.response.points));
          dispatch(missions.actions.setError(null));
          console.log('Collected points', data.response.points)
        } else {
          dispatch(user.actions.setDailyScore(0));
          dispatch(user.actions.setTotalScore(0));
          dispatch(missions.actions.setError(data));
        }
      })
      .catch((e) => console.log(e))

    setDisabledStates((prevState) => ({
      ...prevState,
      [missionId]: true
    }));
  }

  if (loading) {
    return <Loader />
  }
  return (
    <>
      <MissionCardContainer>
        {missionItems.map((mission) => {
          return (
            <Popup
              key={mission._id}
              trigger={
                <MissionCardFront
                  type="button"
                  disabled={disabledStates[mission._id]}>
                  {mission.title}
                  <br />
                  {mission.points} p
                </MissionCardFront>
              }
              modal
              nested>

              {(close) => (
                <>
                  <PopupModal>
                    <CloseButton type="button" className="close" onClick={close}>
                      &times;
                    </CloseButton>
                    <MissionCardBack>
                      <p>{mission.description}.</p>
                      <Button
                        type="button"
                        onClick={() => collectPoints(mission._id)}
                        disabled={disabledStates[mission._id]}
                        style={{
                          backgroundColor: '#6E85B7'
                        }}>
                          Mission accomplished
                      </Button>
                    </MissionCardBack>
                  </PopupModal>
                </>
              )}
            </Popup>
          )
        })}

      </MissionCardContainer>
    </>

  )
}

export default MissionBoard