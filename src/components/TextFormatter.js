import React, { PureComponent } from 'react';

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
      <input name="text" value={this.state.text} onChange={this.handleTextChange} />,
      <p>{this.state.text}</p>
      </>
    );
  }
}

