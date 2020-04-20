import React from 'react';
import NewsfeedCard from './NewsfeedCard'
import SearchNewsfeed from './SearchNewsfeed'

function Newsfeed(){

  const newsfeedStyles = {
    backgroundColor: '#6bbf71',
    height: '1000px',
    width: '300px'
  }

  return (
    <React.Fragment>
      <div style={newsfeedStyles}>
        <NewsfeedCard/>
        <SearchNewsfeed/>
      </div>
    </React.Fragment>
  );
}

export default Newsfeed;