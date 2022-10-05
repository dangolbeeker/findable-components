import React, { useEffect, useState } from 'react';
import { Box, Button, ButtonProps, Checkbox } from '@mantine/core';
import { AiFillFolder, AiFillFolderOpen } from 'react-icons/ai';
import { useTreeView } from './context';
import { Category } from './types';

interface FolderFileButtonProps
  extends React.ComponentPropsWithoutRef<'button'> {
  leftIcon: ButtonProps['leftIcon'];
}

export const FolderFileButton = ({
  children,
  ...props
}: FolderFileButtonProps) => (
  <Button
    size="xs"
    sx={{
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-start',
      color: '#696F8C',
      background: 'white',
      ':hover': {
        background: '#eef2ff',
      },
    }}
    {...props}
  >
    {children}
  </Button>
);

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
    <Box sx={{ padding: 0 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          position: 'sticky',
          background: 'white',
          width: '100%',
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
        <FolderFileButton
          leftIcon={
            !selectMode ? (
              !expanded ? (
                <AiFillFolder />
              ) : (
                <AiFillFolderOpen />
              )
            ) : null
          }
          onClick={() => setExpanded(!expanded)}
        >
          {branchName}
        </FolderFileButton>
      </Box>
      {expanded && <Box>{children({ overCheck: checked })}</Box>}
    </Box>
  );
};
