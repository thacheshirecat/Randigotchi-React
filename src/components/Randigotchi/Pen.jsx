import React from 'react';
import PropTypes from 'prop-types';

import Randi from './Randi';

function Pen(props){
  return(
    <div>
      {props.randiList.map((randi, index) =>
        <Randi name={randi.name}
          food={randi.food}
          play={randi.play}
          sleep={randi.sleep}
          key={index} />
      )}
    </div>
  );
}

Pen.propTypes = {
  randiList: PropTypes.array,
};

export default Pen;
