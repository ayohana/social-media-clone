import React from 'react';
import Description from './Description'
import PersonalCard from './PersonalCard'

function Profile(){

  const profileStyles = {
    backgroundColor: '#8f91cc',
    height: '1000px',
    // width: '300px'
    gridTemplateRows: '1fr 4fr',
    padding: '20px'
  }

  return (
    <React.Fragment>
      <div style={profileStyles}>
        <PersonalCard/>
        <Description/>
      </div>
    </React.Fragment>
  );
}

export default Profile;