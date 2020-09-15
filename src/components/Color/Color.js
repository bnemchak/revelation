import React from 'react';
// import PropTypes from 'prop-types';
import ColorInfo from '../ColorInfo/ColorInfo';
import colorShape from '../../helpers/propz/colorShape';

import './color.scss';

class Color extends React.Component {
  static propTypes = {
    color: colorShape.colorShape,
  }

  render() {
    const { color } = this.props;
    return (
      <div className="card flip-card colorCard">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img className="card-img-top" src={color.imageUrl} alt="color img"/>
          </div>
          <div className="flip-card-back">
            <ColorInfo color={color} key={color.id} />
          </div>
        </div>
      </div>
    );
  }
}

export default Color;
