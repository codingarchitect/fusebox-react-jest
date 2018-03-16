import React from 'react';
import { shallow } from 'enzyme';
import App from './App.jsx';
describe('App', () => {
  const app = shallow(<App />);

  it('renders the app', () => {
    expect(app.find('.App').exists()).toBe(true);
  });

});