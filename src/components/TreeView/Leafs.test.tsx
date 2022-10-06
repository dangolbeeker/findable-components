import React from 'react';
import { render } from '@testing-library/react';

import { testfiles } from '../../data';
import { Leafs } from './Leafs';

describe('Leafs Component', () => {
  render(<Leafs leafs={testfiles} />);

  test('dummytest', () => {
    const one = 1;
    expect(one).toBe(1);
  });
});
