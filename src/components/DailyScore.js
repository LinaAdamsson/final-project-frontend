/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useSelector } from 'react-redux';
// import { user } from 'reducers/user';
// import { API_URL } from 'utils/urls';
import { DailyScorePointsCircle, DailyScorePrompt, DailyScoreWrapper } from 'styles/DailyScore';
// import { Loader } from './Loader';

const DailyScore = () => {
  // const dispatch = useDispatch()
  // const [loading, setLoading] = useState(true)
  // const accessToken = useSelector((store) => store.user.accessToken)
  const dailyScore = useSelector((store) => store.user.dailyScore)
  // const userId = useSelector((store) => store.user.userId)
  // const todaysDate = new Date().toISOString().split('T')[0]

  // useEffect(() => {
  //   if (accessToken && userId) {
  //     const options = {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         // eslint-disable-next-line quote-props
  //         'Authorization': accessToken
  //       }
  //     };
  //     setLoading(true)
  //     fetch(API_URL(`users/${userId}/score/${todaysDate}`), options)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.success) {
  //           dispatch(user.actions.setDailyScore(data.response));
  //           dispatch(user.actions.setError(null));
  //           console.log('Daily score:', dailyScore);
  //         } else {
  //           dispatch(user.actions.setDailyScore(0));
  //           dispatch(user.actions.setError(data));
  //         }
  //       })
  //       .catch((error) => console.log(error))
  //       .finally(() => setLoading(false))
  //   }
  // }, [todaysDate, userId, dailyScore]);
  // console.log(`This is the userId ${userId}`)

  // if (loading) {
  //   return <Loader />
  // }
  return (
    dailyScore ? (
      <DailyScoreWrapper>
        <DailyScorePrompt>
          Your daily score is:
        </DailyScorePrompt>
        <ProgressBar />
        {/* <DailyScorePointsCircle>
          <p>{dailyScore}</p>
        </DailyScorePointsCircle> */}
      </DailyScoreWrapper>
    ) : (
      <DailyScoreWrapper>
        <DailyScorePrompt>
          No daily score available
        </DailyScorePrompt>
        <img src="https://lh3.googleusercontent.com/U4ss0tLqB8G_bGeYhbAOewyGW25VrveeWXKsdHPzTGa_QD6rTlZcBHjQ1jH01MyvKsKn_c2YluGgLZaCsUgMWD1NaI8Zv1TV9U2mMHPvghWNljflFNu3xTqZ-4R0tawUvCpBGKTZ2A=w2400" alt="planet" />
        {/* <div>{dailyScore.message}</div> */}
      </DailyScoreWrapper>
    )
  );
}

export default DailyScore