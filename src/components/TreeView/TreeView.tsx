import React from 'react';
import { Box } from '@mantine/core';
import { TreeViewContext, TreeViewContextProvider } from './context';
import { Tree } from './Tree';
import { TreeViewProps } from './types';

export const TreeView = ({ data, ...props }: TreeViewProps) => {
  return (
    <TreeViewContextProvider {...props}>
      <TreeViewContext.Consumer>
        {() => (
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 12,
              ':first-child': {
                maxHeight: 500,
                overflowY: 'auto',
                overflowX: 'hidden',
                paddingLeft: 8,
              },
            }}
          >
            <Tree branches={data} border="1px solid #D8DAE5" />
          </Box>
        )}
      </TreeViewContext.Consumer>
    </TreeViewContextProvider>
  );
};
