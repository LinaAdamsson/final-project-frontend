import React from 'react';
import { useSelector } from 'react-redux';
import { DailyScorePrompt, DailyScoreWrapper } from 'styles/DailyScoreStyle';
import { ProgressBar } from '../ProgressBar';

const DailyScore = () => {
  const dailyScore = useSelector((store) => store.user.dailyScore)

  return (
    dailyScore ? (
      <DailyScoreWrapper>
        <DailyScorePrompt>
          Hero points earned today:
        </DailyScorePrompt>
        <ProgressBar />
        {/* <DailyScorePointsCircle>
          <p>{dailyScore}</p>
        </DailyScorePointsCircle> */}
      </DailyScoreWrapper>
    ) : (
      <DailyScoreWrapper>
        <DailyScorePrompt>
          No hero points available
        </DailyScorePrompt>
        {/* <img src="https://lh3.googleusercontent.com/U4ss0tLqB8G_bGeYhbAOewyGW25VrveeWXKsdHPzTGa_QD6rTlZcBHjQ1jH01MyvKsKn_c2YluGgLZaCsUgMWD1NaI8Zv1TV9U2mMHPvghWNljflFNu3xTqZ-4R0tawUvCpBGKTZ2A=w2400" alt="planet" /> */}
        {/* <div>{dailyScore.message}</div> */}
      </DailyScoreWrapper>
    )
  );
}

export default DailyScore;