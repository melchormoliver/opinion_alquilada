import '../setupTests';
import React from 'react';
import { render } from '@testing-library/react';
import HelloWorld from './HelloWorld';

test('HelloWorld - renders without crashing', async () => {
  const { findByText } = render(<HelloWorld />);
  const result = await findByText('Hello World3');
  expect(result).toBeDefined();
});
