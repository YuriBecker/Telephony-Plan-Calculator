import React from 'react';
import { shallow } from 'enzyme';

import TextTitle from './index';

describe('Testing TextTitle component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TextTitle> Some Title</TextTitle>);
  });

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());
});
