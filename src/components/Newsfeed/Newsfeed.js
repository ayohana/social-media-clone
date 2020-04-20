import React from 'react';
import NewsfeedCard from './NewsfeedCard'
import SearchNewsfeed from './SearchNewsfeed'

function Newsfeed(){

  const newsfeedStyles = {
    height: '100%',
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
    },

    {
      title: "Best Bacon Ever!",
      body: "Bacon ipsum dolor sit amet salami jowl corned beef, andouille flank tongue ball tip kielbasa pastrami tri-tip meatloaf short loin beef biltong. Cow bresaola ground round strip steak fatback meatball shoulder leberkas pastrami sausage corned beef t-bone pork belly drumstick."
    },

    {
      title: "Long live kittens~",
      body: "Cat ipsum dolor sit amet, hunt anything that moves or hopped up on goofballs hide when guests come over. Hide when guests come over intrigued by the shower, or stare at ceiling climb leg for stretch and use lap as chair. Hunt anything that moves flop over, leave dead animals as gifts for chase imaginary bugs, chase mice for stare at ceiling yet hopped up on goofballs."
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