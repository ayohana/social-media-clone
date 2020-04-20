import React from 'react';
import './App.css';
import Header from './Header/Header'


function App() {
  return (
    <React.Fragment>
      <Header />
      <Profile />
      <Newsfeed />
      <FriendsList />
    </React.Fragment>
  );
}

export default App;
