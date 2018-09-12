import React from 'react';
import PropTypes from 'prop-types';

function Randi(props){
  return(
    <div>
      <p>Me llamo sandwithc</p>
      <h3>{props.name} NNEDS:</h3>
      <p>FUD: {props.food}</p>
      <p>PLAY: {props.play}</p>
      <p>SLEEP NOWWW: {props.sleep}</p>
    </div>
  );
}

Randi.propTypes = {
  name: PropTypes.string.isRequired,
  food: PropTypes.number,
  play: PropTypes.number,
  sleep: PropTypes.number
};

export default Randi;
