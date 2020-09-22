import React from 'react';
// import PropTypes from 'prop-types';

import ManiInfo from '../MaiInfo/ManiInfo';
import maniShape from '../../helpers/propz/maniShape';

class Mani extends React.Component {
  static propTypes = {
    mani: maniShape.maniShape,
  }

  render() {
    const { mani } = this.props;

    return (
      <div className="card flip-card colorCard">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img className="card-img-top" src={mani.maniImg} alt="mani img"/>
        </div>
        <div className="flip-card-back">
          <ManiInfo mani={mani} key={mani.id} />
          {/* <button type="button" className="btn btn-dark" ><i className="fas fa-trash-alt"></i></button> */}
          {/* <button type="button" className="btn btn-dark" ><i className="fas fa-pencil-alt"></i></button> */}
        </div>
      </div>
    </div>
    );
  }
}

export default Mani;
