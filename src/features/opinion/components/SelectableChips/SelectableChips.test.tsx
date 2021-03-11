import React from 'react';
import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';

import SelectableChips from './SelectableChips';
import VecinosChips from '../../helpers/VecinoChips';

const history = createMemoryHistory();
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  opinion: {
    rooms: [],
  },
});

describe('SelectableChips', () => {
  test('renders without crashing', async () => {
    const { baseElement } = render(
      <Provider store={store}>
        <Router history={history}>
          <SelectableChips chips={VecinosChips} />
        </Router>
      </Provider>
    );
    expect(baseElement).toBeDefined();
  });

  test('renders without crashing', async () => {
    const baseElement = mount(
      <Provider store={store}>
        <Router history={history}>
          <SelectableChips chips={VecinosChips} />
        </Router>
      </Provider>
    );
    baseElement.find({ id: '1' }).hostNodes().simulate('click');
    expect(baseElement.find({ id: '1' }).hostNodes()).toHaveProp({
      color: 'primary',
    });
  });
});
