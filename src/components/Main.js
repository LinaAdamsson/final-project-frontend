/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { user } from 'reducers/user';
import { MainContainer } from 'styles/MainStyle';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
// import CloudsFooter from 'assets/footer.png'
import { Footer } from './Footer';
import { Header } from './Header';
import MissionBoard from './MissionBoard';
import DailyScorePage from './DailyScorePage';
import UserPage from './UserPage';
import FetchUserData from './FetchUserData';
import FetchScores from './FetchScores';
// import Loader from './Loader';

const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const isLoading = useSelector((store) => store.loading.isLoading);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(1);
  /* const [activeIndex, setActiveIndex] = useState(1); */
  // react-dom.development.js:86 Warning: React does not recognize the `isActive` prop

  // Extract all fetches to Main component to make the loading state with the reducer work

  useEffect(() => {
    // Try to load access token from local storage on component mount
    /* setActiveIndex(1); */
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

  // setLoading in the redux store, a slice for the loading
  // dispatch in each fetch
  // or apply loader in one view (mission board?)

  return (
    <>
      <MainContainer>
        <Header currentSlideIndex={currentSlideIndex} />
        <FetchScores />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Slider {...sliderSettings} afterChange={handleSlideChange}>
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
      </MainContainer>
      <Footer />
    </>
  )

  // return (
  //   <div>
  //     {isLoading ? (<Loader />) : (
  //       <>
  //         <MainContainer>
  //           <Header currentSlideIndex={currentSlideIndex} />
  //           <FetchScores />
  //           {/* eslint-disable-next-line react/jsx-props-no-spreading */}
  //           <Slider {...sliderSettings} afterChange={handleSlideChange}>
  //             <div>
  //               <UserPage />
  //               <FetchUserData />
  //             </div>
  //             <div>
  //               <MissionBoard />
  //             </div>
  //             <div>
  //               <DailyScorePage />
  //             </div>
  //           </Slider>
  //         </MainContainer>
  //         <Footer />
  //       </>
  //     )}
  //   </div>
  // )
}

export default Main