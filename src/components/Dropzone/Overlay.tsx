import React, { Fragment } from 'react';
import { Box } from '@mantine/core';

export interface OverlayProps {
  children: React.ReactNode;
  dragging: boolean;
  setDragging: (d: boolean) => void;
  isDragActive: boolean;
}
export const Overlay = ({
  children,
  dragging,
  setDragging,
  isDragActive,
}: OverlayProps) => {
  return (
    <Box
      onMouseOver={() => dragging && setDragging(false)}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 5,
        pointerEvents: !dragging ? 'none' : 'initial',
      }}
    >
      {isDragActive && (
        <Fragment>
          <Box
            sx={{
              position: 'relative',
              height: '100%',
              width: '100%',
              background: '#474D66',
              opacity: 0.8,
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              border: '2px dashed white',
              borderRadius: 12,
              margin: 24,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {children}
          </Box>
        </Fragment>
      )}
    </Box>
  );
};
