import React from 'react';
import PropTypes from 'prop-types';

import authData from '../../helpers/data/authData';
import colorsData from '../../helpers/data/colorsData';
import Colors from '../Color/Color';
import ColorForm from '../ColorForm/ColorForm';

class ColorContainer extends React.Component {
  static propTypes = {
    authed: PropTypes.bool,
  }

  state = {
    colors: [],
    formOpen: false,
    editColor: {},
  }

  getColors = () => {
    colorsData.getColorsByUid(authData.getUid())
      .then((colors) => this.setState({ colors }))
      .catch((err) => console.error('get colors broke', err));
  }

  componentDidMount() {
    this.getColors();
  }

  deleteColor = (colorId) => {
    colorsData.deleteColor(colorId)
      .then(() => this.getColors())
      .catch((err) => console.error('cannot delete color', err));
  }

  createColor = (newColor) => {
    colorsData.createColor(newColor)
      .then(() => {
        this.getColors();
        this.setState({ formOpen: false });
      })
      .catch((err) => console.error('create color broke', err));
  }

  editAColor = (colorToEdit) => {
    this.setState({ formOpen: false, editColor: colorToEdit });
  }

  updateColor = (colorId, editedColor) => {
    colorsData.updateColor(colorId, editedColor)
      .then(() => {
        this.getColors();
        this.setState({ formOpen: false, editColor: {} });
      })
      .catch((err) => console.error('update color broke', err));
  }

  closeForm = () => {
    this.setState({ formOpen: false });
  }

  render() {
    const { colors, formOpen, editColor } = this.state;
    const colorCards = colors.map((color) => <Colors key={color.id} color={color} deleteColor={this.deleteColor} editAColor={this.editAColor} />);

    return (
      <div className="ColorContainer">
        { !formOpen ? <button className="btn btn-dark" onClick={() => { this.setState({ formOpen: true, editColor: {} }); }}><i className="far fa-plus-square"></i></button> : '' }
        { formOpen ? <ColorForm createColor={this.createColor} colorThatIAmEditing={editColor} updateColor={this.updateColor} closeForm={this.closeForm}/> : '' }
      <div className="card-columns">
        { colorCards }
      </div>
      </div>
    );
  }
}

export default ColorContainer;
