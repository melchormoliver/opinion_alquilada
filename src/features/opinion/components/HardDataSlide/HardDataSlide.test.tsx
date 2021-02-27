import React, { MutableRefObject } from 'react';
import { render } from '@testing-library/react';
import HardDataSlide from './HardDataSlide';

test('HardDataSlide - renders without crashing', async () => {
  const slidesRef = React.createRef() as MutableRefObject<HTMLIonSlidesElement>;
  const { baseElement } = render(<HardDataSlide slidesRef={slidesRef} />);
  expect(baseElement).toBeDefined();
});
