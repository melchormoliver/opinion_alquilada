import '../setupTests';
import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import HelloWorld from './HelloWorld';

test('HelloWorld - renders without crashing', async () => {
  const { findByText } = render(<HelloWorld />);
  await findByText('Hello World2');
});

test('should test Header component', () => {
  const wrapper = shallow(<HelloWorld />);
  expect(wrapper).toMatchSnapshot();
});
