import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

import { DisplayList } from '../../components/DisplayList';

describe('DisplayList tests', () => {
  it('Should display list items', () => {
    const wrapper = mount(
      <BrowserRouter>
        <DisplayList list={[{ id: 1, name: 'John', type: 'Fire' }]} />
      </BrowserRouter>
    );

    expect(wrapper.find('DragonPreview').exists()).toBe(true);
  });

  it('Should not display list items if empty list is provided', () => {
    const wrapper = mount(
      <BrowserRouter>
        <DisplayList list={[]} />
      </BrowserRouter>
    );

    expect(wrapper.find('DragonPreview').exists()).toBe(false);
  });

  it('Should handle loading state', () => {
    const wrapper = mount(
      <BrowserRouter>
        <DisplayList list={[]} loading />
      </BrowserRouter>
    );

    expect(wrapper.find('Loader').exists()).toBe(true);
    expect(wrapper.find('DragonPreview').exists()).toBe(false);
  });

  it('Should handle error state', () => {
    const wrapper = mount(
      <BrowserRouter>
        <DisplayList list={[]} error />
      </BrowserRouter>
    );

    expect(wrapper.find('DragonPreview').exists()).toBe(false);
    expect(
      wrapper
        .find('p')
        .first()
        .text()
    ).toBe('Não foi possível exibir os dragões.');
  });

  it('Should call the provided callback', () => {
    const onClickMock = jest.fn();
    const wrapper = mount(
      <BrowserRouter>
        <DisplayList
          list={[{ id: 1, name: 'John', type: 'Fire' }]}
          setDragonDetail={onClickMock}
        />
      </BrowserRouter>
    );

    wrapper.find('DragonPreview').simulate('click');

    expect(onClickMock.mock.calls.length).toBe(1);
  });
});
