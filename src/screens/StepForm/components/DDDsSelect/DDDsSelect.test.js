import React from 'react';
import { shallow } from 'enzyme';

import DDDSelect from './index';

describe('Testing DDDSelect component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <DDDSelect
        origin={null}
        setOrigin={jest.fn()}
        destiny={null}
        setDestiny={jest.fn()}
      />
    );
  });

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render the  Buttons', () => {
    expect(
      // wrapper.findWhere(node => node.prop('testID') === 'title')
      wrapper.find('ButtonComponent')
    ).toExist();
  });

  it('should render the title Text', () => {
    expect(
      // wrapper.findWhere(node => node.prop('testID') === 'title')
      wrapper.find('TextComponent')
    ).toExist();
  });

  it('should render the  Layout container', () => {
    expect(
      // wrapper.findWhere(node => node.prop('testID') === 'title')
      wrapper.find('LayoutComponent')
    ).toExist();
  });
});
