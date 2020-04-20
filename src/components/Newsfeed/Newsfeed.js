import React from 'react';
import NewsfeedCard from './NewsfeedCard'
import SearchNewsfeed from './SearchNewsfeed'

function Newsfeed(){

  const newsfeedStyles = {
    height: '1000px',
    borderColor: 'grey',
    borderStyle: 'solid',
    borderWidth: '1px',    
  }

  const newsfeedCardsList = [
    {
      title: "Why do we use it?",
      body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    },

    {
      title: "Where does it come from?",
      body: "Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of classical Latin literature from 45 BC"
    },
    
    {
      title: "Where can I get some?",
      body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
    }   
  ]

  return (
    <React.Fragment>
      <SearchNewsfeed/>
      <div style={newsfeedStyles}>
        {newsfeedCardsList.map((news, index) =>
        <NewsfeedCard
          title = {news.title}
          body = {news.body}
          key = {index}
        />
        )}
      </div>
    </React.Fragment>
  );
}

export default Newsfeed;