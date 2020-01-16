import React from 'react';
import { shallow } from 'enzyme';

import Slide1 from './index';

describe('Testing Slide1 component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Slide1 />);
  });

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render the Vizir Image', () => {
    expect(
      // wrapper.findWhere(node => node.prop('testID') === 'title')
      wrapper.find('Image')
    ).toExist();
  });
});
