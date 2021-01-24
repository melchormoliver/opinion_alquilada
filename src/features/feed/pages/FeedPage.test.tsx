import React from 'react';
import { render } from '@testing-library/react';
import FeedPage from './FeedPage';

test('FeedPage - renders without crashing', async () => {
  const { baseElement } = render(<FeedPage />);
  expect(baseElement).toBeDefined();
});
