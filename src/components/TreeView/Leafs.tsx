import React, { memo } from 'react';
import { Box, Checkbox, Button } from '@mantine/core';
import {
  FixedSizeList as List,
  areEqual,
  ListChildComponentProps,
} from 'react-window';
import memoize from 'memoize-one';
import { IconFolder } from '@tabler/icons';

import { useTreeView } from './context';
import { Category } from './types';

export const Leaf = ({
  code,
  name,
}: {
  code: Category['code'];
  name: Category['name'];
}) => {
  const {
    selectMode,
    handleSelectNodeChange,
    selectedNodes,
    handleSelectLeaf,
  } = useTreeView();

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          paddingLeft: 8,
        }}
      >
        {selectMode && (
          <Checkbox
            checked={!!selectedNodes.find(node => node === code)}
            onChange={() => handleSelectNodeChange(code)}
            sx={{
              margin: 0,
              marginRight: 8,
            }}
          />
        )}
        <Button
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
          }}
          leftIcon={!selectMode ? <IconFolder /> : null}
          onClick={() => {
            handleSelectLeaf(code);
          }}
        >
          {name}
        </Button>
      </Box>
    </Box>
  );
};

const Row = memo(({ data, index, style }: ListChildComponentProps) => {
  const { items } = data;
  const item = items[index];

  return (
    <div style={style} key={item.code + item.name}>
      <Leaf code={item.code} name={item.name} />
    </div>
  );
}, areEqual);

const createItemData = memoize(items => ({
  items,
}));

export const Leafs = ({ leafs }: { leafs: Category[] }) => (
  <div style={{ height: '100%', width: '100%', paddingBottom: 8 }}>
    <List
      height={500}
      itemCount={leafs.length}
      itemData={createItemData(leafs)}
      itemSize={24}
      width="100%"
    >
      {Row}
    </List>
  </div>
);
