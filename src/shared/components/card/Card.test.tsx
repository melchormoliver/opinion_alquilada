import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

test('HelloWorld - renders without crashing', async () => {
  const { baseElement } = render(<Card />);
  expect(baseElement).toBeDefined();
});
