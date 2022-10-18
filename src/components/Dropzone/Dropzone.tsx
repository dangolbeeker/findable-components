import React, { useCallback } from 'react';
import { FileRejection, useDropzone } from 'react-dropzone';
import { BsCloudUpload } from 'react-icons/bs';
import { Box, Card, Group, Text } from '@mantine/core';

import { ACCEPTED_FILE_TYPES, MAX_FILES, MAX_FILE_SIZE } from './config';
import { COLORS } from '../../styles';

interface DropzoneProps {
  heading: string;
  handleAccepted: (acceptedFiles: File[]) => void;
  handleRejected: (rejectedFiles: FileRejection[]) => void;
  description?: string;
}

export const Dropzone = ({
  heading,
  description,
  handleAccepted,
  handleRejected,
}: DropzoneProps) => {
  const onDropAccepted = useCallback((acceptedFiles: File[]) => {
    handleAccepted(acceptedFiles);
  }, []);
  const onDropRejected = useCallback((rejectedFiles: FileRejection[]) => {
    handleRejected(rejectedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: MAX_FILES,
    maxSize: MAX_FILE_SIZE,
    accept: ACCEPTED_FILE_TYPES, //TODO: Test this
    onDropAccepted,
    onDropRejected,
  });

  return (
    <Card
      {...getRootProps()}
      sx={{
        borderStyle: 'dashed',
        cursor: 'pointer',
        transition: 'background 200ms',
        ':hover': {
          background: COLORS.hover,
        },
      }}
      withBorder
    >
      <input {...getInputProps()} />
      <Group position="center" sx={{ minHeight: 200 }}>
        <BsCloudUpload size={50} color={COLORS.folder} />
        <Box>
          <Text size="xl" color={COLORS.folder}>
            {heading}
          </Text>
          <Text size="sm" color={COLORS.folder} mt={7}>
            {description}
          </Text>
        </Box>
      </Group>
    </Card>
  );
};
