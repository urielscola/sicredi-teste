import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

import DragonPreview from '../../components/DragonPreview';

describe('DragonPreview tests', () => {
  it('Should display DragonPreview infos', () => {
    const wrapper = mount(
      <BrowserRouter>
        <DragonPreview {...{ id: '1', name: 'John', type: 'Fire' }} />
      </BrowserRouter>
    );

    expect(wrapper.find('img').exists()).toBe(true);
    expect(wrapper.find('Tag').exists()).toBe(true);
    expect(wrapper.find('h3').exists()).toBe(true);
    expect(
      wrapper
        .find('h3')
        .first()
        .text()
    ).toBe('John');
  });

  it('Should handle the provided onClick callback', () => {
    const onClickMock = jest.fn();
    const wrapper = mount(
      <BrowserRouter>
        <DragonPreview
          {...{ id: '1', name: 'John', type: 'Fire' }}
          onClick={onClickMock}
        />
      </BrowserRouter>
    );
    wrapper.simulate('click');
    expect(onClickMock.mock.calls.length).toBe(1);
  });
});
