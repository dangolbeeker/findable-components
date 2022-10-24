import React from 'react';
import { FileRejection as FileRectionType, useDropzone } from 'react-dropzone';
import { BsCloudUpload } from 'react-icons/bs';
import { Box, Card, Group, Text } from '@mantine/core';

import {
  ACCEPTED_FILE_TYPES,
  MAX_FILES,
  MAX_FILE_SIZE,
  MIN_FILE_SIZE,
} from './config';
import { COLORS } from '../../styles';

export enum ErrorCode {
  FileInvalidType = 'file-invalid-type',
  FileTooLarge = 'file-too-large',
  FileTooSmall = 'file-too-small',
  TooManyFiles = 'too-many-files',
}

export type FileRejection = FileRectionType;

export interface DropzoneProps {
  heading: string;
  description?: string;
  handleAccepted: (acceptedFiles: File[]) => void;
  handleRejected: (rejectedFiles: FileRejection[]) => void;
}

export const Dropzone = ({
  heading,
  description,
  handleAccepted,
  handleRejected,
}: DropzoneProps) => {
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: MAX_FILES,
    minSize: MIN_FILE_SIZE,
    maxSize: MAX_FILE_SIZE,
    accept: ACCEPTED_FILE_TYPES,
    onDropAccepted: (af: File[]) => handleAccepted(af),
    onDropRejected: (rf: FileRejection[]) => handleRejected(rf),
  });

  return (
    <Card
      {...getRootProps()}
      sx={{
        borderStyle: 'dashed',
        borderColor: COLORS.grey,
        cursor: 'pointer',
        transition: 'background 200ms',
        ':hover': {
          background: COLORS.hoverLight,
        },
      }}
      withBorder
    >
      <input {...getInputProps()} />
      <Group position="center" sx={{ minHeight: 200 }}>
        <BsCloudUpload size={50} color={COLORS.dark} />
        <Box>
          <Text size="xl" color={COLORS.dark}>
            {heading}
          </Text>
          <Text size="sm" color={COLORS.dark} mt={7}>
            {description}
          </Text>
        </Box>
      </Group>
    </Card>
  );
};
