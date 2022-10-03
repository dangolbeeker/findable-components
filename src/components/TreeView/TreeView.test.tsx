import React from 'react';
import { render } from '@testing-library/react';
import { TreeView } from './TreeView';
import { testdata } from './test-data';

describe('TreeView Component', () => {
  render(
    <TreeView
      data={testdata}
      handleSelection={function(selection: string[]): void {
        console.log({ selection });
      }}
      onSelectDocument={function(selection: string): void {
        console.log({ selection });
      }}
    />
  );

  test('dummytest', () => {
    const one = 1;
    expect(one).toBe(1);
  });
});
