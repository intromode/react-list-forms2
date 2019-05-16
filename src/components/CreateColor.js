import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class createColor extends PureComponent {

  static propTypes = {
    addColor: PropTypes.func.isRequired
  }
  //so guessing this is add a color they create to the array of colors thats passed to colors function and uses the hex and name to create a color with Color component OKAY

  state = {
    name: '',
    color: '#000000'
  }

  handleSubmit = event => {
    event.preventDefault();
    const { name, color } = this.state;

    this.props.addColor({ name, hex: color });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { color, name } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="name" type="text" value={name} onChange={this.handleChange} ></input>
        <input name="color" type="color" value={color} onChange={this.handleChange}></input>
        <button>Add Color</button>
      </form>
    );
  }
}
