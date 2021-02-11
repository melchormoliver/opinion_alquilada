import React from 'react';
import { render } from '@testing-library/react';
import SelectableChips from './SelectableChips';
import VecinosChips from '../../helpers/VecinoChips';
import { mount } from 'enzyme';

describe('SelectableChips', () => {
  test('renders without crashing', async () => {
    const { baseElement } = render(<SelectableChips chips={VecinosChips} />);
    expect(baseElement).toBeDefined();
  });

  test('renders without crashing', async () => {
    const baseElement = mount(<SelectableChips chips={VecinosChips} />);
    baseElement.find({ id: '1' }).hostNodes().simulate('click');
    expect(baseElement.find({ id: '1' }).hostNodes()).toHaveProp({
      color: 'primary',
    });
  });
});
