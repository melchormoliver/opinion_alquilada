import React, { MutableRefObject, useRef } from 'react';
import { render } from '@testing-library/react';
import RoomList from './RoomList';

test('RoomList - renders without crashing', async () => {
  const slidesRef = React.createRef() as MutableRefObject<HTMLIonSlidesElement>;
  const { baseElement } = render(
    <RoomList
      title='test'
      icon='asd'
      slidesRef={slidesRef}
      items={['pieza 1, pieza 2, pieza 3']}
    />
  );
  expect(baseElement).toBeDefined();
});
