import React from 'react';
import { render } from '@testing-library/react';
import OpinionPage from './OpinionPage';

test('OpinionPage - renders without crashing', async () => {
  const { baseElement } = render(<OpinionPage />);
  expect(baseElement).toBeDefined();
});
