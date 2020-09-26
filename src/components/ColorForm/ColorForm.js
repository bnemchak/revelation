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
      colorName,
      imageUrl,
      colorFamily,
      glitter,
      haveUsed,
    } = this.state;
    const { createColor } = this.props;

    const newColor = {
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
      colorName,
      imageUrl,
      colorFamily,
      glitter,
      haveUsed,
    } = this.state;
    const { updateColor, colorThatIAmEditing } = this.props;

    const myColorWithChanges = {
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
      <div className="form-group row-center">
      <div className="form-check col-center">
        <input className="form-check-inline" type="checkbox" value="false" id="defaultCheck1" onChange={this.changeGlitterEvent}/>
        <label className="form-check-label" for="defaultCheck1">
        No Glitter
      </label>
      </div>
      <div className="form-check col-center">
        <input className="form-check-inline" type="checkbox" value="true" id="defaultCheck1" onChange={this.changeGlitterEvent}/>
        <label className="form-check-label" for="defaultCheck1">
        Has Glitter
      </label>
      </div></div>
      <div className="form-group row-center">
      <div className="form-check">
        <input className="form-check-inline" type="checkbox" value="false" id="defaultCheck1" onChange={this.changeHaveUsedEvent}/>
        <label className="form-check-label" for="defaultCheck1">
        New
      </label>
      </div>
      <div className="form-check col">
        <input className="form-check-inline" type="checkbox" value="true" id="defaultCheck1" onChange={this.changeHaveUsedEvent}/>
        <label className="form-check-label" for="defaultCheck1">
        Have Used
      </label>
      </div></div>
      <div className="row-center">
      <button className="btn btn-dark" onClick={this.editColorEvent}>Confirm Edit</button>
      <button className="btn btn-dark" onClick={this.saveColorEvent}>Save New</button>
      </div>
    </form>
    );
  }
}

export default ColorForm;
