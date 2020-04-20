import React from 'react';
import NavigationBar from './NavigationBar'
import SocialMedia from './SocialMedia'
import SearchBar from './SearchBar'

function Header(){
  const headerStyles = {
    backgroundColor: '#f2dea7',
    // width: '900px',
    // height: '200px',
    display: 'grid',
    gridTemplateColumns: '3fr 4fr 1fr 1fr',
    gridGap: '10px',
    // borderColor: 'blue',
    // borderStyle: 'solid',
    // borderWidth: '5px',
    textAlign: 'center',
    marginBottom: '5px',
  };
  return (
    <React.Fragment>
      <div style={headerStyles}>
        <NavigationBar />
        <div ></div>      
        <SearchBar />
        <SocialMedia />
      </div>
    </React.Fragment>
  );
}

export default Header;