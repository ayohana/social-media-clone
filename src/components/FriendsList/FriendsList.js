import React from 'react';
import FriendCard from './FriendCard'

function FriendsList(){

  const friendListStyles = {
    // backgroundColor: '#ffb459',
    height: '1000`px',
  }

  const friendCardList = [
    {
      name: "Amelia-Grace Payne"
    },
    {
      name: "Jill Park"
    },
    {
      name: "Gregor Roach"
    },
    {
      name: "James Whittaker"
    },
    {
      name: "Ebony Holmes"
    },
    {
      name: "Mary Adams"
    },
    {
      name: "Madeline Hooper"
    },
    {
      name: "Craig David"
    }
  ]

  return (
    <React.Fragment>
      <div style={friendListStyles}>
        <h3>Add a friend</h3>
        <div>
          {friendCardList.map((friend, index) =>
            <FriendCard
              name = {friend.name}
              key = {index}
            />
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default FriendsList;