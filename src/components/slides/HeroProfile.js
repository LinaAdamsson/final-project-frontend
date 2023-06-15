import React from 'react';
import { useSelector } from 'react-redux';
import { CardText, DailyPoints, ScoreCard, ScoreCardWrapper, TotalPoints, UserAvatar, UserPageWrapper, UserText, UserTitle } from 'styles/HeroProfileStyle';

const HeroProfile = () => {
  const myUser = useSelector((store) => store.user)

  return (
    <UserPageWrapper>
      <UserAvatar src="/Images/Avatar_moln.png" alt="avatar" />
      <UserTitle>Super-{myUser.firstName}</UserTitle>
      <UserText
        style={{
          textTransform: 'uppercase'
        }}>REAL NAME: {myUser.firstName} {myUser.lastName}
      </UserText>
      <UserText>TITLE: CLIMATE HERO</UserText>
      <UserText>STRENGTH: ENDURANCE</UserText>
      <ScoreCardWrapper>
        <ScoreCard>
          <CardText>DAILY SCORE</CardText>
          <DailyPoints>{myUser.dailyScore} P</DailyPoints>
          {/* <CardPoints>{myUser.dailyScore}</CardPoints> */}
        </ScoreCard>
        <ScoreCard>
          <CardText
            style={{
              color: '#FFB200'
            }}>TOTAL SCORE
          </CardText>
          <TotalPoints>{myUser.totalScore} p</TotalPoints>
          {/* <CardPoints>{myUser.totalScore}</CardPoints> */}
        </ScoreCard>
      </ScoreCardWrapper>
    </UserPageWrapper>
  );
}

export default HeroProfile;