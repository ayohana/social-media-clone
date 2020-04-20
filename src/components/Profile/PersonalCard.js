import React from 'react';
import profileVector from '../../img/profile-vector.png';

function PersonalCard(){
  const name = "John W. Doe";
  const tweets = "7";
  const following = "12";
  const followers = "1";

  const linksStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '10px',
    textAlign: 'center',
    color: 'whitesmoke',
    textShadow: '2px 2px grey'
  };
  const profileImageNameAndLinks = {
    maxWidth: '400px',
  };
  const profileVectorStyle = {
    maxWidth: '100px',
  };
  const profileAndName = {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gridGap: '2px'
  };
  const nameStyle = {
    display: 'grid',
    gridTemplateRows: '1fr 1fr',
    color: '#38d8ff',
    textShadow: '3px 3px grey'
  };

  return(
    <React.Fragment>
      <div style={profileImageNameAndLinks}>
        <div style={profileAndName}>
          <div>
            <img src={profileVector} style={profileVectorStyle} alt="Profile Vector"/>
          </div>
          <div style={nameStyle}>
            <br/>
            <h3>{name}</h3>
          </div>
        </div>
        <div style={linksStyle}>
          <p>Tweets {tweets}</p> 
          <p>Following {following}</p>
          <p>Followers {followers}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default PersonalCard;