import React from 'react';
import { shallow } from 'enzyme';
import DurationTimeSelect from './index';

describe('Testing DurationTimeSelect component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DurationTimeSelect value={1} setValue={jest.fn()} />);
  });
  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render the  Input Spinner', () => {
    expect(
      // wrapper.findWhere(node => node.prop('testID') === 'title')
      wrapper.find('InputSpinner')
    ).toExist();
  });

  it('should render the  title Text', () => {
    expect(
      // wrapper.findWhere(node => node.prop('testID') === 'title')
      wrapper.find('TextComponent')
    ).toExist();
  });
});
