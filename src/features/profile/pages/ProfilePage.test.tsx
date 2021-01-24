import React from 'react';
import { render } from '@testing-library/react';
import ProfilePage from './ProfilePage';

test('ProfilePage - renders without crashing', async () => {
  const { baseElement } = render(<ProfilePage />);
  expect(baseElement).toBeDefined();
});
