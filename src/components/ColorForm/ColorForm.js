import React from 'react';
import PropTypes from 'prop-types';

import authData from '../../helpers/data/authData';

class ColorForm extends React.Component {
  static propTypes = {
    createColor: PropTypes.func.isRequired,
    updateColor: PropTypes.func.isRequired,
    colorThatIAmEditing: PropTypes.object.isRequired,
    closeForm: PropTypes.func.isRequired,
  }

  state = {
    id: '',
    colorName: '',
    imageUrl: '',
    colorFamily: '',
    glitter: '',
    haveUsed: '',
    isEditing: false,
  }

  componentDidMount() {
    const { colorThatIAmEditing } = this.props;
    if (colorThatIAmEditing.colorName) {
      this.setState({
        id: colorThatIAmEditing.id,
        colorName: colorThatIAmEditing.colorName,
        imageUrl: colorThatIAmEditing.imageUrl,
        colorFamily: colorThatIAmEditing.colorFamily,
        glitter: colorThatIAmEditing.glitter,
        haveUsed: colorThatIAmEditing.haveUsed,
        isEditing: true,
      });
    }
  }

  componentDidUpdate(prevProps) {
    const prevColor = prevProps.colorThatIAmEditing;
    const incomingColor = this.props.colorThatIAmEditing;
    if (prevColor.colorName !== incomingColor.colorName) {
      this.setState({
        id: incomingColor.id || '',
        colorName: incomingColor.colorName || '',
        imageUrl: incomingColor.imageUrl || '',
        colorFamily: incomingColor.colorFamily || '',
        glitter: incomingColor.glitter || '',
        haveUsed: incomingColor.haveUsed || '',
        // eslint-disable-next-line no-unneeded-ternary
        isEditing: incomingColor.colorName ? true : false,
      });
    }
  }

  changeIdEvent = (e) => {
    e.preventDefault();
    this.setState({ id: e.target.value });
  }

  changeColorNameEvent = (e) => {
    e.preventDefault();
    this.setState({ colorName: e.target.value });
  }

  changeImageUrlEvent = (e) => {
    e.preventDefault();
    this.setState({ imageUrl: e.target.value });
  }

  changeColorFamilyEvent = (e) => {
    e.preventDefault();
    this.setState({ colorFamily: e.target.value });
  }

  changeGlitterEvent = (e) => {
    e.preventDefault();
    this.setState({ glitter: e.target.value });
  }

  changeHaveUsedEvent = (e) => {
    e.preventDefault();
    this.setState({ haveUsed: e.target.value });
  }

  saveColorEvent = (e) => {
    e.preventDefault();
    const {
      id,
      colorName,
      imageUrl,
      colorFamily,
      glitter,
      haveUsed,
    } = this.state;
    const { createColor } = this.props;

    const newColor = {
      id,
      colorName,
      imageUrl,
      colorFamily,
      glitter,
      haveUsed,
      uid: authData.getUid(),
    };

    createColor(newColor);
  }

  editColorEvent = (e) => {
    e.preventDefault();
    const {
      id,
      colorName,
      imageUrl,
      colorFamily,
      glitter,
      haveUsed,
    } = this.state;
    const { updateColor, colorThatIAmEditing } = this.props;

    const myColorWithChanges = {
      id,
      colorName,
      imageUrl,
      colorFamily,
      glitter,
      haveUsed,
      uid: authData.getUid(),
    };

    updateColor(colorThatIAmEditing.id, myColorWithChanges);
  }

  closeFormEvent = (e) => {
    e.preventDefault();
    this.props.closeForm();
  };

  render() {
    return (
      <form className="col-6 offset-3">
        <button className="btn btn-dark" onClick={this.closeFormEvent}><i className="fas fa-window-close"></i></button>
         <div className="form-group">
        <label htmlFor="colorId">Color Id</label>
        <input
          type="text"
          className="form-control"
          id="colorId"
          placeholder="Add Color Id"
          onChange={this.changeIdEvent}
        />
      </div>
      <div className="form-group">
        <label htmlFor="colorName">Color Name</label>
        <input
          type="text"
          className="form-control"
          id="colorName"
          placeholder="Enter Color Name"
          onChange={this.changeColorNameEvent}
        />
      </div>
      <div className="form-group">
        <label htmlFor="colorImg">Color Image</label>
        <input
          type="text"
          className="form-control"
          id="colorImg"
          placeholder="Enter Image Link"
          onChange={this.changeImageUrlEvent}
        />
      </div>
      <div className="form-group">
        <label htmlFor="colorFamily">Color Family</label>
        <input
          type="text"
          className="form-control"
          id="colorFamily"
          placeholder="Enter Color Family"
          onChange={this.changeColorFamilyEvent}
        />
      </div>
      <div className="form-group">
        <label htmlFor="colorGlitter">Glitter</label>
        <input
          type="text"
          className="form-control"
          id="colorGlitter"
          placeholder="true or false"
          onChange={this.changeGlitterEvent}
        />
      </div>
      <div className="form-group">
        <label htmlFor="colorHaveUsed">haveUsed</label>
        <input
          type="text"
          className="form-control"
          id="colorHaveUsed"
          placeholder="true or false"
          onChange={this.changeHaveUsedEvent}
        />
      </div>
      <button className="btn btn-dark" onClick={this.editColorEvent}>Confirm Edit</button>
      <button className="btn btn-dark" onClick={this.saveColorEvent}>Save New</button>
    </form>
    );
  }
}

export default ColorForm;
