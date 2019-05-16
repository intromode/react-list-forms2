import React from 'react';
import PropTypes from 'prop-types';
import Color from './Color';

//why are we passing this an array? 
//this component is the list of colors that a person makes. meaning it starts at 0
//so we need to make a component that allows them to create a color, so well get the hex and name from them and then put it in the array called colors which is then used here
export default function Colors({ colors }) {
  const colorList = colors.map(color => {
    return (
      <li key={color.name}>
        <Color name={color.name} hex={color.hex} />
      </li>
    );
  });

  return (
    <ul>
      {colorList}
    </ul>
  );
}

Colors.propTypes = {
  colors: PropTypes.array.isRequired
};
