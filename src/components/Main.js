import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { user } from 'reducers/user';
import { missions } from 'reducers/missions';
import { Button } from 'styles/FormStyle';
import { MainContainer } from 'styles/MainStyle';
import { Footer } from 'components/Footer';
import MissionBoard from './MissionBoard';
import DailyScore from './DailyScore';
import TotalScore from './TotalScore';

// import DailyScore from './DailyScore';

const Main = () => {
  const accessToken = useSelector((store) => store.user.accessToken);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // If the user don't have an accesstoken they get directed to the login page
    if (!accessToken) {
      navigate('/login')
    }
  }, [accessToken, navigate]);
  console.log(accessToken)

  // useEffect(() => {
  //   // Try to load access token from local storage on component mount
  //   const storedAccessToken = localStorage.getItem('accessToken');
  //   if (storedAccessToken) {
  //     dispatch(user.actions.setAccessToken(storedAccessToken));
  //   } else {
  //     navigate('/login');
  //   }
  // }, [dispatch, navigate]);

  const onMyPageButtonClick = () => {
    navigate('/myuserpage')
  }

  const onLogoutButtonClick = () => {
    localStorage.removeItem('accessToken');
    dispatch(user.actions.setAccessToken(null));
    dispatch(user.actions.setEmail(null));
    dispatch(user.actions.setUserId(null));
    dispatch(user.actions.setError(null));
    dispatch(missions.actions.setMissionItems([]));
    navigate('/login')
  }

  // useEffect(() => {
  //   localStorage.setItem('accessToken', accessToken);
  // }, [accessToken]);

  return (
    <MainContainer>
      <MissionBoard />
      <DailyScore />
      <TotalScore />
      <Button type="button" onClick={onMyPageButtonClick}>Go to my page</Button>
      <Button type="button" onClick={onLogoutButtonClick}>Logout</Button>
      <Footer />
    </MainContainer>
  )
}

export default Main