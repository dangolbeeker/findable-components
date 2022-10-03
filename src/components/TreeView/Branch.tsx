import React, { useEffect, useState } from 'react';
import { Box, Button, Checkbox } from '@mantine/core';
import { IconFolder } from '@tabler/icons';

import { useTreeView } from './context';
import { Category } from './types';

const defaultColor = '#696F8C';
const emptyColor = ' #8F95B2';

export const Branch = ({
  count,
  name,
  code,
  overCheck,
  allFiles,
  children,
}: {
  count: number;
  name: Category['name'];
  code: Category['code'];
  overCheck?: boolean;
  allFiles: Category['code'][];
  children: React.FC<{ overCheck: boolean }>;
}) => {
  const { expandAll, selectMode, handleMultiNodeSelect } = useTreeView();
  const [expanded, setExpanded] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(Boolean(overCheck));

  function handleCheckos() {
    setChecked(!checked);
    handleMultiNodeSelect(allFiles, checked);
  }

  useEffect(() => {
    if (code.length > 2 && code !== 'custom') return;
    setExpanded(Boolean(expandAll));
  }, [expandAll, setExpanded, code]);

  useEffect(() => {
    if (!selectMode) {
      setChecked(false);
    }
  }, [selectMode]);

  useEffect(() => {
    setChecked(Boolean(overCheck));
  }, [overCheck]);

  let branchName = `${code} · ${name} (${count})`;
  if (['+', '-', 'custom'].includes(code) || code.startsWith('FND'))
    branchName = `${name} (${count})`;

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          position: 'sticky',
          background: 'white',
          zIndex: 1,
          top: 0,
        }}
      >
        {selectMode && (
          <Box sx={{ margin: 0, marginRight: 8 }}>
            <Checkbox checked={checked} onChange={handleCheckos} />
          </Box>
        )}
        <Button
          leftIcon={
            !selectMode ? (
              <IconFolder color={count > 0 ? defaultColor : emptyColor} />
            ) : null
          }
          onClick={() => setExpanded(!expanded)}
        >
          {branchName}
        </Button>
      </Box>
      {expanded && <Box>{children({ overCheck: checked })}</Box>}
    </Box>
  );
};
