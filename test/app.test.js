import React from 'react';
import { expect } from 'chai';
import { mount, render, shallow } from 'enzyme';
import App from '../src/app';

describe('test App', () => {
  it('exists', () => {
    const wrapper = mount(
      <App />
    );
    expect(wrapper).to.not.be.undefined;
  });
});
