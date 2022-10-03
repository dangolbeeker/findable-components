import React from 'react';
import { render } from '@testing-library/react';
import { Tree } from './Tree';
import { testdata } from './test-data';

describe('Tree Component', () => {
  render(<Tree branches={testdata} />);

  test('dummytest', () => {
    const one = 1;
    expect(one).toBe(1);
  });
});
