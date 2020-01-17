import React from 'react';
import { shallow } from 'enzyme';

import NewConsultButton from './index';

describe('Testing NewConsultButton component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <NewConsultButton onPress={jest.fn()}>Some text</NewConsultButton>
    );
  });

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());
});
