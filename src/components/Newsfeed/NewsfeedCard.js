import React from 'react';
import PropTypes from 'prop-types'
import profileVector2 from '../../img/profile-vector2.png';

const newsfeedCardStyles = {
  display: 'grid',
  gridTemplateColumns: '1fr 4fr',
}

const pStyle = {
  fontSize: '12px'
}

const imageStyle = {
  width: '100px'
}

function NewsfeedCard(props){
  return(
    <React.Fragment>
      <div style={newsfeedCardStyles}>
        <div >
          <img style={imageStyle} src={profileVector2} alt="profile icon"/>
        </div>
        <div>
          <h5>{props.title}</h5>
          <p style={pStyle}>{props.body}</p>
        </div>  
      </div>
      <hr/>
    </React.Fragment>
  )
}

NewsfeedCard.propTypes = {
  body: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default NewsfeedCard;