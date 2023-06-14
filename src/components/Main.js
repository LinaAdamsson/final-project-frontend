/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { user } from 'reducers/user';
import { missions } from 'reducers/missions';
import { LogoutButton, MainContainer, StyledIcon } from 'styles/MainStyle';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { faUser, faChessBoard, faEarthEurope, faChartLine } from '@fortawesome/free-solid-svg-icons';
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; */
// import CloudsFooter from 'assets/footer.png'
import { Footer } from './Footer';
import MissionBoard from './MissionBoard';
import DailyScorePage from './DailyScorePage';
import UserPage from './UserPage';
// import FetchTotalScore from './FetchTotalScore';
// import FetchDailyScore from './FetchDailyScore';
import FetchUserData from './FetchUserData';
import FetchScores from './FetchScores';

const Main = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // const [loading, setLoading] = useState(true)
  const [activeIndex, setActiveIndex] = useState(1);
  const dotIcons = [
    // react-dom.development.js:86 Warning: React does not recognize the `isActive` prop
    <StyledIcon icon={faUser} isActive={activeIndex === 0} />,
    <StyledIcon icon={faChessBoard} isActive={activeIndex === 1} />,
    <StyledIcon icon={faEarthEurope} isActive={activeIndex === 2} />,
    <StyledIcon icon={faChartLine} isActive={activeIndex === 3} />
  ];

  useEffect(() => {
    // Try to load access token from local storage on component mount
    setActiveIndex(1);
    const storedAccessToken = localStorage.getItem('accessToken');
    const storedUserId = localStorage.getItem('userId');
    if (storedAccessToken && storedUserId) {
      dispatch(user.actions.setAccessToken(storedAccessToken));
      dispatch(user.actions.setUserId(storedUserId));
      console.log('Access token stored', storedAccessToken)
      console.log('User id stored', storedUserId)
    } else {
      navigate('/login');
    }
  }, []);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  const onLogoutButtonClick = () => {
    dispatch(user.actions.setAccessToken(null));
    dispatch(user.actions.setEmail(null));
    dispatch(user.actions.setUserId(null));
    dispatch(user.actions.setError(null));
    dispatch(missions.actions.setMissionItems([]));
    localStorage.removeItem('userId');
    localStorage.removeItem('accessToken');
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

  // setLoading in the redux store, a slice for the loading
  // dispatch in each fetch
  // or apply loader in one view (missionboard?)

  return (
    <MainContainer>
      <FetchScores />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Slider {...sliderSettings}>
        <div>
          <UserPage />
          <FetchUserData />
        </div>
        <div>
          <MissionBoard />
        </div>
        <div>
          <DailyScorePage />
        </div>
      </Slider>
      <LogoutButton type="button" onClick={onLogoutButtonClick}>Logout</LogoutButton>
      <Footer />
    </MainContainer>
  )
}

export default Main