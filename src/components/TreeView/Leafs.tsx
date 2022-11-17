import React, { memo } from 'react';
import { Box, Button, Checkbox, Tooltip } from '@mantine/core';
import {
  FixedSizeList as List,
  areEqual,
  ListChildComponentProps,
} from 'react-window';
import memoize from 'memoize-one';
import { AiOutlineFile } from 'react-icons/ai';

import { useTreeView } from './context';
import { Category } from './types';
import { COLORS } from '../../styles';

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
        }}
      >
        {selectMode && (
          <Checkbox
            checked={!!selectedNodes.find(node => node === code)}
            onChange={() => handleSelectNodeChange(code)}
            size="xs"
            sx={{ paddingLeft: 10 }}
          />
        )}
        <Tooltip
          label={name}
          withArrow
          color={COLORS.dark}
          position="bottom-start"
        >
          <Button
            size="xs"
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-start',
              color: COLORS.dark,
              background: '#FFFFFF',
              ':hover': {
                background: COLORS.hoverLight,
              },
            }}
            leftIcon={!selectMode ? <AiOutlineFile /> : null}
            onClick={() => handleSelectLeaf(code)}
          >
            {name}
          </Button>
        </Tooltip>
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
      itemSize={35}
      width="100%"
    >
      {Row}
    </List>
  </div>
);
