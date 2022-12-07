import React, { useCallback, useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Box, Button, Text } from '@mantine/core';
import { BiCloudUpload } from 'react-icons/bi';
import { useEventListener } from 'usehooks-ts';
import { RiUploadCloudFill } from 'react-icons/ri';

import { MIN_FILE_SIZE, MAX_FILE_SIZE } from './config';
import { COLORS } from '../../styles';
import { FileRejection } from './Dropzone';
import { Overlay } from './Overlay';

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
      <Overlay
        dragging={dragging}
        setDragging={setDragging}
        isDragActive={isDragActive}
      >
        <Box sx={{ textAlign: 'center' }}>
          <RiUploadCloudFill size={60} color="white" />
          <Text size="xl" color="white">
            {label}
          </Text>
        </Box>
      </Overlay>
      <input {...getInputProps()} />
      <DropzoneButton label={label} type="button" onClick={open}>
        {label}
      </DropzoneButton>
    </div>
  );
};
