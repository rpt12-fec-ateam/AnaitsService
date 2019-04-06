import React from 'react';
import {shallow, mount, render} from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../client/App.jsx';
//import { isTSAnyKeyword } from '@babel/types';

configure({ adapter: new Adapter()} );

describe('Test Suite', () => {

  it('should be selectable by class "name"', () => {
    expect(shallow(<App />).is('.name')).toBe(true);
  });

  it('should mount in a full DOM', () => {
    expect(mount(<App />).find('.name').length).toBe(1);
  });
});