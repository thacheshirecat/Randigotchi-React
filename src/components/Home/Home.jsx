import React from 'react';
import { Link } from 'react-router-dom';

function Home(){
  return(
    <div>
      <p>Bitcoin is a myth</p>
      <p><Link to='/randigotchi'>Start the game!</Link></p>
    </div>
  );
}
export default Home;
