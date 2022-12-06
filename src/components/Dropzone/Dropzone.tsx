import React, { Fragment, useCallback, useRef, useState } from 'react';
import { FileRejection as FileRectionType, useDropzone } from 'react-dropzone';
import { RiUploadCloudFill } from 'react-icons/ri';
import { Box, Card, Group, Text } from '@mantine/core';
import { useEventListener } from 'usehooks-ts';

import { MAX_FILES, MAX_FILE_SIZE, MIN_FILE_SIZE } from './config';
import { COLORS } from '../../styles';
import { DropzoneButton } from './UploadButton';

export enum ErrorCode {
  FileInvalidType = 'file-invalid-type',
  FileTooLarge = 'file-too-large',
  FileTooSmall = 'file-too-small',
  TooManyFiles = 'too-many-files',
}

export type FileRejection = FileRectionType;

export interface DropzoneProps {
  label: string;
  buttonLabel: string;
  handleAccepted: (acceptedFiles: File[]) => void;
  handleRejected: (rejectedFiles: FileRejection[]) => void;
}

export const Dropzone = ({
  label,
  buttonLabel,
  handleAccepted,
  handleRejected,
}: DropzoneProps) => {
  const documentRef = useRef<Document>(document);
  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    noClick: true,
    noKeyboard: true,
    maxFiles: MAX_FILES,
    minSize: MIN_FILE_SIZE,
    maxSize: MAX_FILE_SIZE,
    onDropAccepted: (af: File[]) => {
      handleAccepted(af);
      handleDragDrop();
    },
    onDropRejected: (rf: FileRejection[]) => {
      handleRejected(rf);
      handleDragDrop();
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
    <Card
      {...getRootProps()}
      sx={{
        borderStyle: 'dashed',
        borderColor: COLORS.grey,
        transition: 'background 200ms',
      }}
      withBorder
    >
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
      <Group
        position="center"
        sx={{ minHeight: 200, display: 'flex', flexDirection: 'column' }}
      >
        <Box
          sx={{
            width: 56,
            height: 56,
            borderRadius: '50%',
            background: '#EDEFF4',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <RiUploadCloudFill size={24} color={COLORS.dark} />
        </Box>
        <Text size="xl" color={COLORS.dark}>
          {label}
        </Text>
        <DropzoneButton label={buttonLabel} onClick={open} />
      </Group>
    </Card>
  );
};
