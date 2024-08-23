import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const currentUser = useSelector((state) => state.login.currentUser);

  if (!currentUser) {
    return <p>No user is logged in</p>;
  }

  return (
    <div>
      <h1>Welcome, {currentUser.username}!</h1>
      <p>Username: {currentUser.username}</p>
    </div>
  );
};

export default Profile;
