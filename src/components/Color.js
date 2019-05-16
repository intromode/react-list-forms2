import React from 'react';
import PropTypes from 'prop-types';

const decimalFromHex = hex => {
  return Number.parseInt(`0x${hex}`, 16);
};

const rgbFromHex = hex => {
  return {
    red: decimalFromHex(hex.slice(1, 3)),
    green: decimalFromHex(hex.slice(3, 5)),
    blue: decimalFromHex(hex.slice(5, 7))
  };
};


export default function Color({ name, hex }) {
  const rgb = rgbFromHex(hex);

  return (
    <dl>
      <dt>Name:</dt>
      <dd>{name || hex}</dd>

      <dt>Hex:</dt>
      <dd>{hex}</dd>

      <dt>rgb:</dt>
      <dd>
        <p>Red- {rgb.red}</p>
        <p>Green- {rgb.green}</p>
        <p>Blue- {rgb.blue}</p>
      </dd>
    </dl>
  );
}

Color.propTypes = {
  name: PropTypes.string,
  hex: PropTypes.string.isRequired
};
