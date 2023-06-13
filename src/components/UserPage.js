import React from 'react';
import { useSelector } from 'react-redux';
import { Avatar } from 'styles/AvatarStyle';

const UserPage = () => {
  const myUser = useSelector((store) => store.user)

  return (
    <>
      <Avatar src="/Images/Hero.png" alt="avatar" />
      <h2>Super-{myUser.firstName}</h2>
      <ul>
        <li>Your real name: {myUser.firstName} {myUser.lastName}</li>
        {/* <li>Your email: {myUser.email}</li> */}
        <li>Hero points today: {myUser.dailyScore}</li>
        <li>Total hero score: {myUser.totalScore}</li>
      </ul>
    </>
  );
}

export default UserPage