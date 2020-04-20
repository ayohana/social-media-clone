import React from 'react';
import './App.css';
import Header from './Header/Header';
import Profile from './Profile/Profile';
import Newsfeed from './Newsfeed/Newsfeed';
import FriendsList from './FriendsList/FriendsList'


function App() {

  const appStyles = {
    display: 'grid',
    gridTemplateColumns: '2fr 3fr 2fr',
    gridColumnGap: '10px',
    // borderColor: 'blue',
    // borderStyle: 'solid',
    // border
    Width: '5px',
  }
  
  const someBorder = {
    borderColor: 'blue',
    borderStyle: 'solid',
    borderWidth: '5px',
  }



  return (
    <React.Fragment>
      <Header />
      <div style={appStyles}>
        <div><Profile /></div>
        <div><Newsfeed /></div>
        <div style={someBorder}><FriendsList /></div>
      </div>
    </React.Fragment>
  );
}

export default App;
