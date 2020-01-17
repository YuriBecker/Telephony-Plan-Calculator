import React from 'react';
import { shallow } from 'enzyme';

import Header from './index';

describe('Testing Header component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header>Some text</Header>);
  });

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());
});
