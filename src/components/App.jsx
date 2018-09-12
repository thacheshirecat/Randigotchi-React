import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home/Home';
import Pen from './Randigotchi/Pen';


function App(){

  return(
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/randigotchi' component={Pen} />
      </Switch>
    </div>
  );
}

export default App;
