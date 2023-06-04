import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MissionBoard from './MissionBoard';

export const Main = () => {
  const navigate = useNavigate
  const accessToken = useSelector((store) => store.user.accessToken);

  useEffect(() => {
    if (!accessToken) {
      navigate('/login')
    }
  });

  return (
    <MissionBoard />
  )
}