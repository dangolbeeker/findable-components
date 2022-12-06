import React, { Fragment, useCallback, useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Box, Button, Text } from '@mantine/core';
import { BiCloudUpload } from 'react-icons/bi';

import { MIN_FILE_SIZE, MAX_FILE_SIZE } from './config';
import { COLORS } from '../../styles';
import { FileRejection } from './Dropzone';
import { useEventListener } from 'usehooks-ts';
import { RiUploadCloudFill } from 'react-icons/ri';

export interface DropzoneButtonProps
  extends React.ComponentPropsWithoutRef<'button'> {
  label: string;
}

export interface UploadButtonProps extends DropzoneButtonProps {
  handleAccepted: (acceptedFiles: File[]) => void;
  handleRejected: (rejectedFiles: FileRejection[]) => void;
}

export const DropzoneButton = ({ label, ...props }: DropzoneButtonProps) => (
  <Button
    variant="outline"
    leftIcon={<BiCloudUpload size={16} color={COLORS.dark} />}
    sx={{ color: COLORS.dark, borderColor: COLORS.grey, background: 'white' }}
    {...props}
  >
    {label}
  </Button>
);

export const UploadButton = ({
  label,
  handleAccepted,
  handleRejected,
}: UploadButtonProps) => {
  const documentRef = useRef<Document>(document);
  const { getRootProps, getInputProps, open, isDragActive } = useDropzone({
    noClick: true,
    noKeyboard: true,
    minSize: MIN_FILE_SIZE,
    maxSize: MAX_FILE_SIZE,
    onDropAccepted: (af: File[]) => {
      handleAccepted(af);
    },
    onDropRejected: (rf: FileRejection[]) => {
      handleRejected(rf);
    },
  });

  const [dragging, setDragging] = useState(false);

  const handleDragOver = useCallback(() => {
    if (dragging) return;
    setDragging(true);
  }, [dragging]);

  const handleDragDrop = () => {
    setDragging(false);
  };

  useEventListener('dragover', handleDragOver, documentRef);
  useEventListener('drop', handleDragDrop, documentRef);

  return (
    <div {...getRootProps()}>
      <Box
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
              <Box sx={{ textAlign: 'center' }}>
                <RiUploadCloudFill size={60} color="white" />
                <Text size="xl" color="white">
                  {label}
                </Text>
              </Box>
            </Box>
          </Fragment>
        )}
      </Box>
      <input {...getInputProps()} />
      <DropzoneButton label={label} type="button" onClick={open}>
        {label}
      </DropzoneButton>
    </div>
  );
};
