import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { user } from 'reducers/user';
import { missions } from 'reducers/missions';
import { Button } from 'styles/FormStyle';
import { MainContainer, StyledIcon } from 'styles/MainStyle';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { faUser, faChessBoard, faEarthEurope, faChartLine } from '@fortawesome/free-solid-svg-icons';
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; */
import MissionBoard from './MissionBoard';
import DailyScore from './DailyScore';
import TotalScore from './TotalScore';
import UserPage from './UserPage';
import { Footer } from './Footer';
// import DailyScore from './DailyScore';

const Main = () => {
  const accessToken = useSelector((store) => store.user.accessToken);
  const userId = useSelector((store) => store.user.userId);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // const [loading, setLoading] = useState(true)
  const [activeIndex, setActiveIndex] = useState(1);
  const dotIcons = [
    <StyledIcon icon={faUser} isActive={activeIndex === 0} />,
    <StyledIcon icon={faChessBoard} isActive={activeIndex === 1} />,
    <StyledIcon icon={faEarthEurope} isActive={activeIndex === 2} />,
    <StyledIcon icon={faChartLine} isActive={activeIndex === 3} />
  ];

  // useEffect(() => {
  //   // If the user don't have an accessToken they get directed to the login page
  //   if (!accessToken) {
  //     navigate('/login')
  //   }
  // }, [accessToken, navigate]);

  useEffect(() => {
    // Try to load access token from local storage on component mount
    setActiveIndex(1);
    const storedAccessToken = localStorage.getItem('accessToken');
    const storedUserId = localStorage.getItem('userId');
    if (storedAccessToken) {
      dispatch(user.actions.setAccessToken(storedAccessToken));
    } else if (storedUserId) {
      dispatch(user.actions.setUserId(storedUserId));
    } else {
      navigate('/login');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('userId', userId);
  }, [accessToken, userId]);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };
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
    customPaging: (index) => dotIcons[index],
    initialSlide: 1,
    afterChange: handleSlideChange,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
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
      {/* <Button type="button" onClick={onMyPageButtonClick}>Go to my page</Button> */}
      <Button type="button" onClick={onLogoutButtonClick}>Logout</Button>
      <Footer />
    </MainContainer>
  )
}

export default Main