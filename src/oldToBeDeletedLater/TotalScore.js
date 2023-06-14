// /* eslint-disable react-hooks/exhaustive-deps */
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { user } from 'reducers/user';
// import { API_URL } from 'utils/urls';
// import { TotalScorePointsCircle, TotalScorePrompt, TotalScoreWrapper } from 'styles/TotalScore';
// // import { Loader } from './Loader';

// const TotalScore = () => {
//   const dispatch = useDispatch()
//   // const [loading, setLoading] = useState(true)
//   const accessToken = useSelector((store) => store.user.accessToken)
//   const totalScore = useSelector((store) => store.user.totalScore)
//   const userId = useSelector((store) => store.user.userId)

//   useEffect(() => {
//     if (accessToken) {
//       const options = {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           // eslint-disable-next-line quote-props
//           'Authorization': accessToken
//         }
//       };
//       // setLoading(true)
//       fetch(API_URL(`users/${userId}/total-score`), options)
//         .then((res) => res.json())
//         .then((data) => {
//           if (data.success) {
//             dispatch(user.actions.setTotalScore(data.response));
//             dispatch(user.actions.setError(null));
//             console.log('Total score:', totalScore)
//           } else {
//             dispatch(user.actions.setTotalScore(0));
//             dispatch(user.actions.setError(data));
//           }
//         })
//         .catch((error) => console.log(error))
//         // .finally(() => setLoading(false))
//     }
//   }, [userId, totalScore]);
//   console.log(`This is the userId ${userId}`)
//   // if (loading) {
//   //   return <Loader />
//   // }
//   return (
//     totalScore ? (
//       <TotalScoreWrapper>
//         <TotalScorePrompt>Your total score is:</TotalScorePrompt>
//         <TotalScorePointsCircle>{totalScore}</TotalScorePointsCircle>
//       </TotalScoreWrapper>
//     ) : (
//       <TotalScorePrompt>
//         No total score available. Have you completed any missions yet?
//       </TotalScorePrompt>
//     )
//   );
// }

// export default TotalScore