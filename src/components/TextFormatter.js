import React, { PureComponent } from 'react';
import { SketchPicker } from 'react-color';

export default class TextFormatter extends PureComponent {
  state = {
    text: '',
    color: ''
  }
  handleTextChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    return (
      <>
      Enter Your Text:
      <input name="text" value={this.state.text} onChange={this.handleTextChange} />

      Color For Your Text:
      <input name="color" type="color" value={this.state.color} onChange={this.handleTextChange}></input>

      <p style={{ color: this.state.color }}>{this.state.text}</p>
      </>
    );
  }
}

