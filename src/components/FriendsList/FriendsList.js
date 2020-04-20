import React from 'react';
import FriendCard from './FriendCard'

function FriendsList(){

  const friendListStyles = {
    backgroundColor: '#ffb459',
    height: '1000px',
  }

  return (
    <React.Fragment>
      <div style={friendListStyles}>
        <FriendCard/>
      </div>
    </React.Fragment>
  );
}

export default FriendsList;