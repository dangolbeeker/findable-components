import React from 'react';
import { render } from '@testing-library/react';

import { Branch } from './Branch';

describe('Branch Component', () => {
  render(
    <Branch
      count={1337}
      name="johnnytester"
      code="1337"
      allFiles={['testfile', 'testfile2']}
    >
      {() => null}
    </Branch>
  );

  test('dummytest', () => {
    const one = 1;
    expect(one).toBe(1);
  });
});
