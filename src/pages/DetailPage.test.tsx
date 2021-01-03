import '../setupTests';
import React from 'react';
import DetailPage from './DetailPage';
import { shallow } from 'enzyme';

test('HelloWorld - renders without crashing', async () => {
  const element = shallow(<DetailPage />);
  expect(element).toBeDefined();
});
