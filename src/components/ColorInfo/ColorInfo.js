import React from 'react';
import colorShape from '../../helpers/propz/colorShape';

class ColorInfo extends React.Component {
  static propTypes ={
    color: colorShape.colorShape,
  }

  render() {
    const { color } = this.props;
    return (
      <div className="container color-info">
        <div className="row">
          <div className="col">
            <h2> {color.colorName}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h5> {color.colorFamily}</h5>
          </div>
        </div>
        {/* <div className="row">
          <div className="col">
            <h5>{color.glitter}</h5>
          </div>
        </div> */}
      </div>
    );
  }
}

export default ColorInfo;
