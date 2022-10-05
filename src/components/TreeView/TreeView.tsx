import React from 'react';
import { SimpleGrid } from '@mantine/core';
import { TreeViewContext, TreeViewContextProvider } from './context';
import { Tree } from './Tree';
import { TreeViewProps } from './types';

export const TreeView = ({ data, ...props }: TreeViewProps) => {
  console.log({ data });
  return (
    <TreeViewContextProvider {...props}>
      <TreeViewContext.Consumer>
        {() => (
          <SimpleGrid
            cols={1}
            spacing="md"
            breakpoints={[
              { minWidth: 755, cols: 2, spacing: 'sm' },
              { minWidth: 1440, cols: 3, spacing: 'md' },
            ]}
            sx={{
              ':first-of-type': {
                maxHeight: 500,
                overflowY: 'auto',
                overflowX: 'hidden',
              },
            }}
          >
            <Tree branches={data} border="1px solid #D8DAE5" />
          </SimpleGrid>
        )}
      </TreeViewContext.Consumer>
    </TreeViewContextProvider>
  );
};
