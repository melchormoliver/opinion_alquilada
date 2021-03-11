import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';

import OpinionPage from './OpinionPage';

const history = createMemoryHistory();
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  opinion: {
    rooms: [],
  },
});

test('OpinionPage - renders without crashing', async () => {
  const { baseElement } = render(
    <Provider store={store}>
      <Router history={history}>
        <OpinionPage />
      </Router>
    </Provider>
  );
  expect(baseElement).toBeDefined();
});
