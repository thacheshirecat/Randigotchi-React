import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home/Home';
import Pen from './Randigotchi/Pen';


class App extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = {
      masterRandiList: [
        {
          name: 'Randi',
          food: 100,
          play: 100,
          sleep: 100
        }
      ]
    };
  }

  randiDiesALittle(){
    let newMasterRandiList = this.state.masterRandiList.slice();
    console.log(newMasterRandiList);
    newMasterRandiList.forEach((randi) => {
      randi.food -= 5,
      randi.play -= 5,
      randi.sleep -= 5
      });
    this.setState({masterRandiList: newMasterRandiList});
  }

  render()
  {
    return(
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/randigotchi' render={()=><Pen randiList={this.state.masterRandiList} />} />
        </Switch>
      </div>
    );
  }

  componentDidMount()
  {
    this.killRandi = setInterval(() =>
      this.randiDiesALittle(),
    5000
    );
  }

  componentWillUnmount()
  {
    clearInterval(this.killRandi);
  }

}

export default App;
