import React from 'react';
import { mount } from 'enzyme';
import InputField from '../../components/InputField';

describe('InputField tests', () => {
  it('Should apply the right config', () => {
    const mockOnChange = jest.fn();
    const wrapper = mount(
      <InputField name="name" label="Nome: *" onChange={mockOnChange} />
    );

    expect(wrapper.find('#name').exists()).toBe(true);
    expect(wrapper.find('label').exists()).toBe(true);
    expect(
      wrapper
        .find('label')
        .first()
        .text()
    ).toBe('Nome: *');
  });

  it('Should call provided onChange method', () => {
    const mockOnChange = jest.fn();
    const wrapper = mount(
      <InputField name="name" label="Nome: *" onChange={mockOnChange} />
    );

    wrapper.find('input').simulate('change');
    expect(mockOnChange.mock.calls.length).toBe(1);
  });
});
