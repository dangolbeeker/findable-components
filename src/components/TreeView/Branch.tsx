import React, { Fragment, useEffect, useState } from 'react';

import { Box, Button, Checkbox } from '@mantine/core';
import {
  AiFillFolder,
  AiFillFolderOpen,
  AiOutlineFolder,
} from 'react-icons/ai';

import { useTreeView } from './context';
import { COLORS } from '../../styles/colors';
import { Category } from './types';

const getFolderIcon = (
  selectMode?: boolean,
  expanded?: boolean,
  noFiles?: boolean
) => {
  if (selectMode) return <Fragment />;
  if (noFiles) return <AiOutlineFolder />;
  if (expanded) return <AiFillFolderOpen />;

  return <AiFillFolder />;
};

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
  const noFiles = !Boolean(allFiles.length);

  if (['+', '-', 'custom'].includes(code) || code.startsWith('FND')) {
    branchName = `${name} (${count})`;
  }

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          position: 'sticky',
          background: 'white',
          width: '100%',
          borderRadius: 4,
          zIndex: 1,
          top: 0,
        }}
      >
        {selectMode && (
          <Checkbox
            checked={checked}
            onChange={handleCheckos}
            size="xs"
            sx={{ paddingLeft: 10 }}
          />
        )}
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
          leftIcon={getFolderIcon(selectMode, expanded, noFiles)}
          onClick={() => setExpanded(!expanded)}
        >
          {branchName}
        </Button>
      </Box>
      {expanded && <Box>{children({ overCheck: checked })}</Box>}
    </Box>
  );
};
