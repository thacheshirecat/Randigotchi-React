import React from 'react';
import { Link } from 'react-router-dom';

import Randi from './Randi';

class Pen extends React.Component{

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
    this.handleRandiHungry = this.handleRandiHungry.bind(this);
    this.handleRandiBored = this.handleRandiBored.bind(this);
    this.handleRandiSleepy = this.handleRandiSleepy.bind(this);
  }

  randiDiesALittle(){
    let newMasterRandiList = this.state.masterRandiList.slice();
    newMasterRandiList.forEach((randi) => {
      randi.food -= 7,
      randi.play -= 7,
      randi.sleep -= 7;
    });
    this.setState({masterRandiList: newMasterRandiList});
  }

  handleRandiHungry(){
    let newMasterRandiList = this.state.masterRandiList.slice();
    newMasterRandiList.forEach((randi) =>
      randi.food += 1
    );
    this.setState({masterRandiList: newMasterRandiList});
  }
  handleRandiBored(){
    let newMasterRandiList = this.state.masterRandiList.slice();
    newMasterRandiList.forEach((randi) =>
      randi.play += 1
    );
    this.setState({masterRandiList: newMasterRandiList});
  }
  handleRandiSleepy(){
    let newMasterRandiList = this.state.masterRandiList.slice();
    newMasterRandiList.forEach((randi) =>
      randi.sleep += 1
    );
    this.setState({masterRandiList: newMasterRandiList});
  }

  render()
  {
    return(
      <div>
        {this.state.masterRandiList.map((randi, index) =>
          <Randi
            onRandiHungry={this.handleRandiHungry}
            onRandiBored={this.handleRandiBored}
            onRandiSleepy={this.handleRandiSleepy}
            name={randi.name}
            food={randi.food}
            play={randi.play}
            sleep={randi.sleep}
            key={index} />
        )}
        <p><Link to='/'>Quit</Link></p>
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

export default Pen;
