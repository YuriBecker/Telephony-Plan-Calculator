import React from 'react';
import { shallow } from 'enzyme';

import PlanSelect from './index';

describe('Testing PlanSelect component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <PlanSelect selectedPlan="" setSelectedPlan={jest.fn()} />
    );
  });

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render the  Button', () => {
    expect(wrapper.find('ButtonComponent')).toExist();
  });

  it('should render the title Text', () => {
    expect(wrapper.find('TextComponent')).toExist();
  });

  it('should render the  Layout container', () => {
    expect(wrapper.find('LayoutComponent')).toExist();
  });
});
