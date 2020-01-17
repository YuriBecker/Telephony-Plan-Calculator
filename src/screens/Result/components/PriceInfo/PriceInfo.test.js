import React from 'react';
import { shallow } from 'enzyme';

import PriceInfo from './index';

describe('Testing PriceInfo component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PriceInfo text="Some text" price={77} />);
  });

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());
});
