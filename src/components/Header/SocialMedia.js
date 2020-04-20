import React from 'react';

function SocialMedia(){
  const buttonStyle = {
    height: '32px',
    backgroundColor: '#38d8ff',
    borderRadius: '10px',
    borderColor: '#38d8ff',
    borderStyle: 'solid',
    borderWidth: '1px',
    marginTop: '12px',
    color: 'white',
    marginRight: '15px'
  };

  return(
    <button style={buttonStyle}>Tweet</button>
  )
}

export default SocialMedia;