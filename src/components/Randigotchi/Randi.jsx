import React from 'react';
import PropTypes from 'prop-types';

function Randi(props){
  return(
    <div>
      <p>Me llamo sandwithc</p>
      <h3>Your {props.name} NNEDS:</h3>
      <p>FUD: {props.food}</p>
      <button onClick={props.onRandiHungry}>Gimme Snack</button>
      <p>PLAY: {props.play}</p>
      <button onClick={props.onRandiBored}>Gimme Computer</button>
      <p>SLEEP NOWWW: {props.sleep}</p>
      <button onClick={props.onRandiSleepy}>Gimme Nap</button>
    </div>
  );
}

Randi.propTypes = {
  onRandiHungry: PropTypes.func,
  onRandiBored: PropTypes.func,
  onRandiSleepy: PropTypes.func,
  name: PropTypes.string.isRequired,
  food: PropTypes.number,
  play: PropTypes.number,
  sleep: PropTypes.number
};

export default Randi;
