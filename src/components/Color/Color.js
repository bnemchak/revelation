import React from 'react';
import PropTypes from 'prop-types';
import ColorInfo from '../ColorInfo/ColorInfo';
import colorShape from '../../helpers/propz/colorShape';

import './color.scss';

class Color extends React.Component {
  static propTypes = {
    color: colorShape.colorShape,
    deleteColor: PropTypes.func.isRequired,
    editAColor: PropTypes.func.isRequired,
  }

  deleteColorEvent = (e) => {
    e.preventDefault();
    const { color, deleteColor } = this.props;

    deleteColor(color.id);
  };

  editColorEvent = (e) => {
    e.preventDefault();
    const { editAColor, color } = this.props;
    editAColor(color);
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
            <button type="button" className="btn btn-dark" onClick={this.deleteColorEvent}><i className="fas fa-trash-alt"></i></button>
            <button type="button" className="btn btn-dark" onClick={this.editColorEvent}><i className="fas fa-pencil-alt"></i></button>
            <button type="button" className="btn btn-dark"><i className="fas fa-hand-sparkles"></i></button>
          </div>
        </div>
      </div>
    );
  }
}

export default Color;
