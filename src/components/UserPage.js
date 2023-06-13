import React from 'react';
import { useSelector } from 'react-redux';
import { Avatar } from 'styles/AvatarStyle';
import { UserPageWrapper } from 'styles/UserPage';

const UserPage = () => {
  const myUser = useSelector((store) => store.user)

  return (
    <>
      <Avatar src="https://lh3.googleusercontent.com/_0iKG-ssXTtP7Xei8wHoAQndbKvbr9lxtWw97-6AmN6lOFJ-vUj7U3B90JTCGXWOVOxx7XUYfX2RlyHKBh-DwcFgKMFS0rk6tECTrKAmTuypssGcGwd2_XbBcNK-2C4QxLJQ8z85Xg=w2400" alt="avatar" />
      <UserPageWrapper>
        <h2>Super-{myUser.firstName}</h2>
        <ul>
          <li>Your real name: {myUser.firstName} {myUser.lastName}</li>
          {/* <li>Your email: {myUser.email}</li> */}
          <li>Hero points today: {myUser.dailyScore}</li>
          <li>Total hero score: {myUser.totalScore}</li>
        </ul>
      </UserPageWrapper>
    </>
  );
}

export default UserPage