import React from 'react';
import { render } from '@testing-library/react';
import SoftDataSlide from './SoftDataSlide';

test('SoftDataSlide - renders without crashing', async () => {
  const { baseElement } = render(<SoftDataSlide />);
  expect(baseElement).toBeDefined();
});
