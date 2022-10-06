import React, { Fragment } from 'react';
import { Box } from '@mantine/core';

import { Leaf, Leafs } from './Leafs';
import { Branch } from './Branch';
import { checkIfFolders, countFiles, getFiles } from './utils';
import { useTreeView } from './context';
import { Category } from './types';

export const Tree = ({
  branches,
  border,
  overCheck,
}: {
  branches: Category[];
  border?: string;
  overCheck?: boolean;
}) => {
  const { showEmptyCats } = useTreeView();

  return (
    <Fragment>
      {branches?.map(branch => {
        const { isFile, code, name, children } = branch;
        const count = countFiles(children, isFile);
        const allFiles = getFiles(children);
        const childrenAreFolders = checkIfFolders(children);

        if (!showEmptyCats && count < 1 && code.length > 1) return null;

        if (isFile) {
          return <Leaf code={code} name={name} key={code + name} />;
        }

        return (
          <Box
            key={code + name}
            sx={{
              border: border,
              borderRadius: 4,
              background: 'white',
              ':first-child': {
                maxHeight: 500,
                overflowY: 'auto',
                overflowX: 'hidden',
              },
            }}
          >
            <Branch
              count={count}
              name={name}
              code={code}
              allFiles={allFiles}
              overCheck={overCheck}
            >
              {({ overCheck }) => (
                <Box sx={{ marginLeft: 24 }}>
                  {children &&
                    (childrenAreFolders || children.length < 20 ? (
                      <Tree branches={children} overCheck={overCheck} />
                    ) : (
                      <Leafs leafs={children} />
                    ))}
                </Box>
              )}
            </Branch>
          </Box>
        );
      })}
    </Fragment>
  );
};
