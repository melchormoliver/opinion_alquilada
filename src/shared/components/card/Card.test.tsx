import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

test('Card - renders without crashing', async () => {
  const { baseElement } = render(
    <Card title='test' content='test' imgsrc='some path' />
  );
  expect(baseElement).toBeDefined();
});
