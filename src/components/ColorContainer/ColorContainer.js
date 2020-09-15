import React from 'react';
import PropTypes from 'prop-types';

import colorData from '../../helpers/data/colorsData';
import Colors from '../Color/Color';

class ColorContainer extends React.Component {
  static propTypes = {
    authed: PropTypes.bool,
  }

  state = {
    colors: [],
  }

  componentDidMount() {
    colorData.getColors()
      .then((response) => this.setState({ colors: response }))
      .catch((err) => console.error('broken colors', err));
  }

  render() {
    const { colors } = this.state;
    const colorCards = colors.map((color) => <Colors key={color.id} color={color} />);

    return (
      <div className="card-columns">
        { colorCards }
      </div>
    );
  }
}

export default ColorContainer;
