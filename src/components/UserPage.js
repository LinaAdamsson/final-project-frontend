import React from 'react';
import { useSelector } from 'react-redux';
import { Avatar } from 'styles/AvatarStyle';
import { DailyScoreCard, ScoreCardWrapper, TotalScoreCard, UserPageWrapper } from 'styles/UserPage';

const UserPage = () => {
  const myUser = useSelector((store) => store.user)

  return (
    <>
      <UserPageWrapper>
      <Avatar src="/Images/Avatar_moln.png" alt="avatar" />
      <h2>Super-{myUser.firstName}</h2>
      <h4>Title: Environment Hero</h4>
      <h4>Your real name: {myUser.firstName} {myUser.lastName}</h4>
      <ScoreCardWrapper>
        <DailyScoreCard>
          <h4>Today&apos;s hero score:</h4>
          <p>{myUser.dailyScore}</p>
        </DailyScoreCard>
        <TotalScoreCard>
          <p>Total hero score:</p>
          <p>{myUser.totalScore}</p>
        </TotalScoreCard>
      </ScoreCardWrapper>
    </UserPageWrapper>
    </>
  );
}

export default UserPage