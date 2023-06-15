/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { user } from 'reducers/user';
import { MainContainer } from 'styles/MainStyle';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import HeroProfile from 'components/slides/HeroProfile';
import Footer from '../Footer';
import Header from '../Header';
import MissionBoard from '../slides/MissionBoard';
import DailyScore from '../slides/DailyScore';
import FetchUserData from '../fetches/FetchUserData';
import FetchScores from '../fetches/FetchScores';

const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(1);

  // Stretch goal:
  // Extract all fetches to Main component and set up loading state in reducer or make thunks

  useEffect(() => {
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
    setCurrentSlideIndex(index);
  };

  const sliderSettings = {
    dots: true,
    initialSlide: 1,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <MainContainer>
        <Header currentSlideIndex={currentSlideIndex} />
        <FetchScores />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Slider {...sliderSettings} afterChange={handleSlideChange}>
          <div>
            <HeroProfile />
            <FetchUserData />
          </div>
          <div>
            <MissionBoard />
          </div>
          <div>
            <DailyScore />
          </div>
        </Slider>
      </MainContainer>
      <Footer />
    </>
  )
}

export default Main