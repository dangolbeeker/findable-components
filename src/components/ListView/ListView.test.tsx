import React from 'react';
import { render, screen } from '@testing-library/react';

import { ListView } from './';
import { testdata } from '../../data';

describe('Tree Component', () => {
  render(
    <ListView
      documents={testdata as any}
      handleSelection={function(docIds: string[]): void {
        console.log({ docIds });
      }}
      handleSelectDocument={function(document: Document): void {
        console.log({ document });
      }}
    />
  );

  const list = screen.getAllByRole('checkbox');

  test('List rendering', () => {
    expect(list).toHaveLength(5);
  });
});
