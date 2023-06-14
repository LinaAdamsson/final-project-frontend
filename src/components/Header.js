import React from 'react';
import { HeaderWrapper, HeaderText } from 'styles/HeaderStyle';

export const Header = ({ currentSlideIndex }) => {
  let headerText = '';

  switch (currentSlideIndex) {
    case 0:
      headerText = 'Hero info';
      break;
    case 1:
      headerText = 'Missionboard';
      break;
    case 2:
      headerText = 'Daily score';
      break;
    default:
      headerText = 'Missionboard'
  }

  return (
    <HeaderWrapper>
      <HeaderText>
        <h1>{headerText}</h1>
      </HeaderText>
    </HeaderWrapper>
  )
}