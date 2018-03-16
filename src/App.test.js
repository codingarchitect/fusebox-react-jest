import React from 'react';
import { FuseBox } from 'fuse-box';
import { shallow } from 'enzyme';
import App from './App.jsx';

describe('App', () => {
  const app = shallow(<App />);

  it('renders the app', () => {
    expect(app.find('.App').exists()).toBe(true);
  });

});

describe('Plugin', () => {
  
  it('wildcard imports', () => {
    console.log(import('../pages/*/*.component.js'));
  });

});