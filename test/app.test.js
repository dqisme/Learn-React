import { mount, render, shallow } from 'enzyme';
import App from '../src/components/app';

describe('test App', () => {
  it('exists', () => {
    const wrapper = mount(
      <App />
    );
    expect(wrapper).to.not.be.undefined;
  });
});
