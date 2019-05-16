import React from 'react';
import PropTypes from 'prop-types';

//why wouldn't we do a class and then use component? is it because theres no state and therefore we dont need it to be a class?

export default function Sidebar({ children }) {
  return (
    <nav>
      {children}
    </nav>
  );
}

Sidebar.propTypes = {
  children: PropTypes.node
};
