import React from 'react';
import TabsManager from './TabsManager';
import { shallow } from 'enzyme';

test('TabsManager - renders without crashing', async () => {
  const element = shallow(<TabsManager />);
  expect(element).toBeDefined();
});
