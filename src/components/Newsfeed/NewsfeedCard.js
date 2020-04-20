import React from 'react';
import PropTypes from 'prop-types'
import profileVector2 from '../../img/profile-vector2.png';

const newsfeedCardStyles = {
  display: 'grid',
  gridTemplateColumns: '1fr 4fr'
}

const imageStyle = {
  width: '100px'
}

function NewsfeedCard(props){
  return(
    <React.Fragment>
      <div style={newsfeedCardStyles}>
        <div >
          <img style={imageStyle} src={profileVector2}/>
        </div>
        <div>
          <h3>{props.title}</h3>
          <p>{props.body}</p>
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