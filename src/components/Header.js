import React from 'react';
import { HeaderWrapper, HeaderText } from 'styles/HeaderStyle';

export const Header = ({ currentSlideIndex }) => {
  let headerText = '';

  switch (currentSlideIndex) {
    case 0:
      headerText = 'USERPAGE';
      break;
    case 1:
      headerText = 'MISSIONBOARD';
      break;
    case 2:
      headerText = 'DAILY SCORE';
      break;
    default:
      headerText = 'MISSIONBOARD'
  }

  return (
    <HeaderWrapper>
      <HeaderText>
        <h1>{headerText}</h1>
      </HeaderText>
    </HeaderWrapper>
  )
}