import React from 'react';
import { shallow } from 'enzyme';
import Color from './Color';

describe('Color component', () => {
  it('renders a Color', () => {
    const wrapper = shallow(<Color name="Red" hex="#FF0000" />);
    expect(wrapper).toMatchSnapshot();
  });
});
