import React from 'react';
import { SimpleGrid } from '@mantine/core';

import { TreeViewContext, TreeViewContextProvider } from './context';
import { Tree } from './Tree';
import { COLORS, BREAKPOINTS } from '../../styles';
import { TreeViewProps } from './types';

export const TreeView = ({
  data,
  expandAll,
  showEmptyCats,
  selectMode,
  handleSelection,
  onSelectDocument,
}: TreeViewProps) => {
  return (
    <TreeViewContextProvider
      expandAll={expandAll}
      showEmptyCats={showEmptyCats}
      selectMode={selectMode}
      handleSelection={handleSelection}
      onSelectDocument={onSelectDocument}
    >
      <TreeViewContext.Consumer>
        {() => (
          <SimpleGrid
            cols={1}
            spacing="md"
            breakpoints={[
              { minWidth: BREAKPOINTS.tablet, cols: 2, spacing: 'sm' },
              { minWidth: BREAKPOINTS.laptop, cols: 3, spacing: 'md' },
            ]}
            sx={{
              '> div': {
                maxHeight: 500,
                overflowY: 'auto',
                overflowX: 'hidden',
              },
            }}
          >
            <Tree branches={data} border={`1px solid ${COLORS.grey}`} />
          </SimpleGrid>
        )}
      </TreeViewContext.Consumer>
    </TreeViewContextProvider>
  );
};
