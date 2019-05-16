import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from './Sidebar';

describe('Sidebar component', () => {
  it('renders a Sidebar', () => {
    const wrapper = shallow(
      <Sidebar>
        <a>Testing</a>
      </Sidebar>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
