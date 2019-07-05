import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

import { DragonDetail } from '../../components/DragonDetail';

describe('DragonDetail tests', () => {
  it('Should DragonDetail infos', () => {
    const wrapper = mount(
      <BrowserRouter>
        <DragonDetail
          isEditing
          resourceId="1"
          getDragonDetail={jest.fn()}
          getDragonDetailSuccess={jest.fn()}
          detail={{ id: 1, name: 'John', type: 'Fire' }}
        />
      </BrowserRouter>
    );

    expect(wrapper.find('InputField').length).toBe(3);
  });
});
