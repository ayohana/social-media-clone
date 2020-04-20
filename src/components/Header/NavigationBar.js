import React from 'react';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';

function NavigationBar(){
  const navBarStyles = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '10px',
    marginLeft: '15px'
    // borderColor: 'navy',
    // borderStyle: 'solid',
    // borderWidth: '3px'
  }
  return(
    <React.Fragment>
      <div style={navBarStyles}>
        <Tab1 />
        <Tab2 />
        <Tab3 />
      </div>
    </React.Fragment>
  );
}

export default NavigationBar;