import React from 'react';
import { HeaderWrapper, HeaderText } from 'styles/HeaderStyle';

export const Header = ({ currentSlideIndex }) => {
  let headerText = '';

  switch (currentSlideIndex) {
    case 0:
      headerText = 'Hero Profile';
      break;
    case 1:
      headerText = 'Mission Board';
      break;
    case 2:
      headerText = 'Daily Score';
      break;
    default:
      headerText = 'Mission Board'
  }

  return (
    <HeaderWrapper>
      <HeaderText>
        <h1>{headerText}</h1>
      </HeaderText>
    </HeaderWrapper>
  )
}