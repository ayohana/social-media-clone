import React from 'react';

function SearchBar(){
  const searchBarPlaceholder = "Search...";
  const searchBarStyle = {
    padding: '5px',
    height: '20px',
    borderRadius: '10px',
    borderColor: '#38d8ff',
    borderStyle: 'solid',
    borderWidth: '1px',
    marginTop: '12px',
    // marginBottom: '5px'
  };
  return(
    <input placeholder={searchBarPlaceholder} style={searchBarStyle}/>
  )
}

export default SearchBar;