import React from 'react';
import PropTypes from 'prop-types';

import colorsData from '../../helpers/data/colorsData';
import maniData from '../../helpers/data/maniData';

import Mani from '../Mani/Mani';

class ManiContainer extends React.Component {
  static propTypes = {
    colorId: PropTypes.string.isRequired,
    setManiContainer: PropTypes.func.isRequired,
  }

  state = {
    color: {},
    manis: [],
  }

  componentDidMount() {
    const { colorId } = this.props;

    colorsData.getManiContainer(colorId)
      .then((response) => this.setState({ color: response.data }))
      .catch((err) => console.error('get mani containter failed', err));

    maniData.getManisByColorId(colorId)
      .then((manis) => this.setState({ manis }))
      .catch((err) => console.error('get manis failed', err));
  }

  render() {
    const { color, manis } = this.state;
    // const { setManiContainer } = this.props;

    const maniCards = manis.map((mani) => <Mani key={mani.id} mani={mani}/>);

    return (
      <div>
        <h3> {color.name}</h3>
        <div className="card-columns">
          {maniCards}
        </div>
      </div>
    );
  }
}

export default ManiContainer;
