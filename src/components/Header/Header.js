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
    gridTemplateColumns: '3fr 0.5fr 1fr 1fr',
    borderColor: 'blue',
    borderStyle: 'solid',
    borderWidth: '5px'
  }
  return (
    <React.Fragment>
      <div style={headerStyles}>
        <NavigationBar/>
        <div></div>      
        <SearchBar/>
        <SocialMedia/>
      </div>
    </React.Fragment>
  );
}

export default Header;