import React, { MutableRefObject, useRef } from 'react';
import { render } from '@testing-library/react';
import DescribableRoom from './RoomList';

test('DescribableRoom - renders without crashing', async () => {
  const slidesRef = React.createRef() as MutableRefObject<HTMLIonSlidesElement>;
  const { baseElement } = render(
    <DescribableRoom
      title='test'
      icon='asd'
      slidesRef={slidesRef}
      items={['pieza 1, pieza 2, pieza 3']}
    />
  );
  expect(baseElement).toBeDefined();
});
