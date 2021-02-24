import React from 'react';
import { render } from '@testing-library/react';
import RoomPage from './RoomPage';

test('RoomPage - renders without crashing', async () => {
  const { baseElement } = render(<RoomPage />);
  expect(baseElement).toBeDefined();
});
