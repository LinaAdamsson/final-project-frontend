import React from 'react';
import { useSelector } from 'react-redux';
import { CardText, DailyPoints, ScoreCard, ScoreCardWrapper, TotalPoints, UserAvatar, UserPageWrapper, UserText, UserTitle } from 'styles/UserPage';

const UserPage = () => {
  const myUser = useSelector((store) => store.user)

  return (
    <UserPageWrapper>
      <UserAvatar src="/Images/Avatar_moln.png" alt="avatar" />
      <UserTitle>Super-{myUser.firstName}</UserTitle>
      <UserText>Real name: {myUser.firstName} {myUser.lastName}</UserText>
      <UserText>Title: Environment Hero</UserText>
      <UserText>Strength: Endurance</UserText>
      <ScoreCardWrapper>
        <ScoreCard>
          <CardText>Today&apos;s score:</CardText>
          <DailyPoints>{myUser.dailyScore} p</DailyPoints>
          {/* <CardPoints>{myUser.dailyScore}</CardPoints> */}
        </ScoreCard>
        <ScoreCard>
          <CardText>Total score:</CardText>
          <TotalPoints>{myUser.totalScore} p</TotalPoints>
          {/* <CardPoints>{myUser.totalScore}</CardPoints> */}
        </ScoreCard>
      </ScoreCardWrapper>
    </UserPageWrapper>
  );
}

export default UserPage