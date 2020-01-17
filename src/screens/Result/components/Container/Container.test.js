import React from 'react';
import { shallow } from 'enzyme';

import Container from './index';

describe('Testing Container component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Container>Some data</Container>);
  });

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());
});
