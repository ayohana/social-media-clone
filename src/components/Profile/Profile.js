import React from 'react';
import Description from './Description'
import PersonalCard from './PersonalCard'

function Profile(){

  const profileStyles = {
    backgroundColor: '#8f91cc',
    height: '100%',
    padding: '20px'
  }

  return (
    <React.Fragment>
      <div style={profileStyles}>
        <PersonalCard/>
        <br />
        <Description/>
      </div>
    </React.Fragment>
  );
}

export default Profile;