import React from 'react';
import { mount } from 'enzyme';

import Button from '../../components/Button';

describe('Button tests', () => {
  it('Should display the right label and should not be loading', () => {
    const wrapper = mount(<Button label="Click me" />);

    expect(wrapper.text()).toBe('Click me');
  });

  it('Should trigger the provided click callback', () => {
    const onClickMock = jest.fn();
    const wrapper = mount(<Button label="Click me" onClick={onClickMock} />);
    wrapper.find('button').simulate('click');

    expect(onClickMock.mock.calls.length).toBe(1);
  });

  it('Should display the loading state', () => {
    const wrapper = mount(<Button label="Click me" loading />);
    expect(wrapper.find('styles__SmallLoader').exists()).toBe(true);
  });
});
