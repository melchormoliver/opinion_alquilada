import React from 'react';
import { render } from '@testing-library/react';
import HardDataSlide from './HardDataSlide';

test('HardDataSlide - renders without crashing', async () => {
  const { baseElement } = render(<HardDataSlide />);
  expect(baseElement).toBeDefined();
});
