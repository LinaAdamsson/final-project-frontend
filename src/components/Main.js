import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { user } from 'reducers/user';
import { missions } from 'reducers/missions';
import { Button } from 'styles/FormStyle';
import { MainContainer } from 'styles/MainStyle';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import MissionBoard from './MissionBoard';
import DailyScore from './DailyScore';
import TotalScore from './TotalScore';
import UserPage from './UserPage';

const Main = () => {
  const accessToken = useSelector((store) => store.user.accessToken);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // const [loading, setLoading] = useState(true)
  /* const dotIcons = [
    <i className="fa-regular fa-user" />,
    <i className="fa-solid fa-border-all" />,
    <i className="fa-solid fa-earth-americas" />,
    <i className="fa-solid fa-heart" />
  ]; */

  useEffect(() => {
    // If the user don't have an accessToken they get directed to the login page
    if (!accessToken) {
      navigate('/login')
    }
  }, [accessToken, navigate]);

  // useEffect(() => {
  //   // Try to load access token from local storage on component mount
  //   const storedAccessToken = localStorage.getItem('accessToken');
  //   if (storedAccessToken) {
  //     dispatch(user.actions.setAccessToken(storedAccessToken));
  //   } else {
  //     navigate('/login');
  //   }
  // }, [dispatch, navigate]);

  /* const onMyPageButtonClick = () => {
    navigate('/myuserpage')
  } */

  const onLogoutButtonClick = () => {
    localStorage.removeItem('accessToken');
    dispatch(user.actions.setAccessToken(null));
    dispatch(user.actions.setEmail(null));
    dispatch(user.actions.setUserId(null));
    dispatch(user.actions.setError(null));
    dispatch(missions.actions.setMissionItems([]));
    navigate('/login')
  }

  const sliderSettings = {
    dots: true,
    /* dotsClass: 'custom-dots',
    customPaging: (index) => dotIcons[index], */
    initialSlide: 1,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  // useEffect(() => {
  //   localStorage.setItem('accessToken', accessToken);
  // }, [accessToken]);

  return (
    <>
      <MainContainer>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Slider {...sliderSettings}>
          <div>
            <UserPage />
          </div>
          <div>
            <MissionBoard />
          </div>
          <div>
            <DailyScore />
          </div>
          <div>
            <TotalScore />
          </div>
        </Slider>
      </MainContainer>
      <Button type="button" onClick={onLogoutButtonClick}>Logout</Button>
    </>
  )
}

export default Main