import React from 'react';
import maniShape from '../../helpers/propz/maniShape';

class ManiInfo extends React.Component {
  static propTypes ={
    mani: maniShape.maniShape,
  }

  render() {
    const { mani } = this.props;
    return (
      <div className="container color-info">
        <div className="row">
          <div className="col">
            <h2> {mani.colorName}</h2>
          </div>
        </div>
        {/* <div className="row">
          <div className="col">
            <h5> {mani.}</h5>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h5>{color.glitter}</h5>
          </div>
        </div> */}
      </div>
    );
  }
}

export default ManiInfo;
