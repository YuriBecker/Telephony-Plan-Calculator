/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow } from 'enzyme';

import FaleMaisLogo from './index';

describe('Testing FaleMaisLogo component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<FaleMaisLogo />);
  });

  it('should render correctly - Default', () => {
    const component = shallow(<FaleMaisLogo />);
    expect(component).toMatchSnapshot('Default  snapshot');
  });

  it('should render correctly - Diferent icon size', () => {
    const component = shallow(<FaleMaisLogo iconHeight={24} iconWidth={24} />);
    expect(component).toMatchSnapshot('Diferent icon size snapshot');
  });

  it('should render correctly - Diferent text category', () => {
    const component = shallow(<FaleMaisLogo titleCategory="h2" />);
    expect(component).toMatchSnapshot('Diferent text category');
  });
});
