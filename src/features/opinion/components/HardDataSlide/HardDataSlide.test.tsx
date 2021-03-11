import React, { MutableRefObject } from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';

import HardDataSlide from './HardDataSlide';

const history = createMemoryHistory();
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  opinion: {
    rooms: [],
  },
});

test('HardDataSlide - renders without crashing', async () => {
  const slidesRef = React.createRef() as MutableRefObject<HTMLIonSlidesElement>;
  const { baseElement } = render(
    <Provider store={store}>
      <Router history={history}>
        <HardDataSlide slidesRef={slidesRef} />
      </Router>
    </Provider>
  );
  expect(baseElement).toBeDefined();
});
