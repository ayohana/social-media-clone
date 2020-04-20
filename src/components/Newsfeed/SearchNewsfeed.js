import React from 'react';

function SearchNewsfeed(){

  const SearchNewsfeedStyle = {
    paddingTop: '20px',
    paddingLeft: '40px',
    backgroundColor: '#89b2f5',
    height: '70px',
    display: 'grid',
    gridTemplateColumns: '1fr 5fr'
  }

  const brownSquare = {
    width: '40px',
    height: '40px',
    backgroundColor: '#853115'
  }

  const placeholderText = "What's happening?"

  const inputStyle = {
    padding: '5px',
    height: '30px',
    borderRadius: '10px',
    borderColor: '#38d8ff',
    borderStyle: 'solid',
    borderWidth: '1px',
    fontSize: '15px',
    color: 'red',
    marginLeft: '15px',
    marginRight: '20px'
  }

  return(
    <React.Fragment>
      <div style={SearchNewsfeedStyle}>
        <div style={brownSquare}></div>
        <div>
        <input placeholder={placeholderText} style={inputStyle}></input>
        </div>
      </div>
    </React.Fragment>
  )
}

export default SearchNewsfeed;