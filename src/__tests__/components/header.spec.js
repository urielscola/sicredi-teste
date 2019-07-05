import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '../../components/Header';

describe('Header tests', () => {
  it('Should only the Logo if the is no user logged in', () => {
    const wrapper = mount(
      <BrowserRouter>
        <Header isLogged={false} />
      </BrowserRouter>
    );

    expect(wrapper.find('UserInfo').exists()).toBe(false);
  });

  it('Should display UserInfo if the user is logged in', () => {
    const wrapper = mount(
      <BrowserRouter>
        <Header isLogged user={{ username: 'Dragãozeiro' }} />
      </BrowserRouter>
    );

    expect(wrapper.find('UserInfo').exists()).toBe(true);
  });
});
