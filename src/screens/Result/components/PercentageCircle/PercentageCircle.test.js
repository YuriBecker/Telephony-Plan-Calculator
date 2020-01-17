import React from 'react';
import { shallow } from 'enzyme';

import PercentageCircle from './index';

describe('Testing PercentageCircle component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PercentageCircle percentage={37} />);
  });

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());
});
