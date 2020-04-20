import React from 'react';
import PropTypes from 'prop-types'

function FriendCard(props){
  return(
    <React.Fragment>
      <h5>{props.name}</h5>
    </React.Fragment>
  )
}

FriendCard.propTypes = {
  name: PropTypes.string.isRequired,
}


export default FriendCard;