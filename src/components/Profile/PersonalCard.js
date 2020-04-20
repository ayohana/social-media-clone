import React from 'react';
import profileVector from '../../img/profile-vector.png';

function PersonalCard(){
  const name = "John W. Doe";
  const tweets = "TWEETS";
  const following = "FOLLOWING";
  const followers = "FOLLOWERS";
  const personalCardStyle = {
    display: 'grid',
    // gridTemplateColumns: '1fr 1fr 1fr',
    textAlign: 'center'
  };
  const profileImageAndName = {
    gridTemplateColumns: '2fr 1fr',
    maxWidth: '400px',
    borderColor: 'blue',
    borderStyle: 'solid',
    borderWidth: '5px',
  };
  const profileVectorStyle = {
    padding: '10px',
    maxWidth: '100px',
    borderColor: 'green',
    borderStyle: 'solid',
    borderWidth: '5px',
  };
  const nameStyle = {
    // gridTemplateRows: '1fr 1fr',
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: '5px',
  };

  return(
    <React.Fragment>
      <div style={profileImageAndName}>
        <div>
          <img src={profileVector} style={profileVectorStyle} alt="Profile Vector"/>
          <div style={nameStyle}>
            <h3>{name}</h3>
          </div>
        </div>
        <div style={personalCardStyle}>
          <p>{tweets}</p>
          <p>{following}</p>
          <p>{followers}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default PersonalCard;