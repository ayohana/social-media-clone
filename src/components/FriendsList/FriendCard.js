import React from 'react';
import PropTypes from 'prop-types';
import profileVector2 from '../../img/profile-vector2.png';

const friendCardStyles = {
  display: 'grid',
  gridTemplateColumns: '1fr 3fr',
  gridGap: '10px'
}

const imageStyle = {
  width: '60px',
  height: '60px',
  borderWidth: 'thin',
  borderColor: 'grey',
  borderStyle: 'solid',
  borderRadius: '5px'
}

const buttonStyle = {
  color: 'white',
  backgroundColor: '#0f6fd1',
  borderRadius: '3px',
  border: 'none',
  fontSize: '10px',
  height: '25px',
  width: '60px'
}

const headerStyle = {
  margin: '0',
  marginBottom: '10px'
}

function FriendCard(props){
  return(
    <React.Fragment>
      <div style={friendCardStyles}>
        <div>
        <img style={imageStyle} src={profileVector2} alt="profile icon"/>
        </div>
        <div>
          <h5 style={headerStyle}>{props.name}</h5>
          <button style={buttonStyle}>Add friend</button>
        </div>
      </div>
    </React.Fragment>
  )
}

FriendCard.propTypes = {
  name: PropTypes.string.isRequired,
}


export default FriendCard;