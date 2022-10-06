import React from 'react';
import { render, screen } from '@testing-library/react';

import { DocumentListAG } from '.';
import testdata from './dummyDocData.json';

describe('Tree Component', () => {
  render(
    <DocumentListAG
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
    expect(list).toHaveLength(6);
  });
});
