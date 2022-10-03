import React from 'react';
import { render } from '@testing-library/react';
import { Tree } from './Tree';
import { testdata } from './test-data';

describe('Tree Component', () => {
  render(<Tree branches={testdata} />);
});
