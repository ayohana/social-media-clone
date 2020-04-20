import React from 'react';
import './App.css';
import Header from './Header/Header'
// import Profile from './Profile/Profile'
import Newsfeed from './Newsfeed/Newsfeed'


function App() {

  const appStyles = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr'
  }

  return (
    <React.Fragment>
      <div style={appStyles}></div>
      <Header />
      <div style={appStyles}>
        {/* <Profile /> */}
        <Newsfeed />
        {/* <FriendsList /> */}
      </div>
    </React.Fragment>
  );
}

export default App;
