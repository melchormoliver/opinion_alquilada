import React from 'react';
import NotFoundPage from './NotFoundPage';
import { mount, shallow } from 'enzyme';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

describe('<NotFoundPage/>', () => {
  test('renders without crashing', async () => {
    const element = shallow(<NotFoundPage />);
    expect(element).toBeDefined();
  });

  test('go to feed', async () => {
    const element = mount(
      <Router history={history}>
        <NotFoundPage />
      </Router>
    );
    jest.spyOn(history, 'push');
    element.find('#go-feed').hostNodes().simulate('click');
    expect(history.push).toBeCalled();
  });
});
