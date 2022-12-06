import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from '@mantine/core';
import { BiCloudUpload } from 'react-icons/bi';

import {
  MAX_FILES,
  MIN_FILE_SIZE,
  MAX_FILE_SIZE,
  ACCEPTED_FILE_TYPES,
} from './config';
import { COLORS } from '../../styles';
import { FileRejection } from './Dropzone';

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
    sx={{ color: COLORS.dark, borderColor: COLORS.dark }}
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
  const { getRootProps, getInputProps, open } = useDropzone({
    noClick: true,
    noKeyboard: true,
    maxFiles: MAX_FILES,
    minSize: MIN_FILE_SIZE,
    maxSize: MAX_FILE_SIZE,
    accept: ACCEPTED_FILE_TYPES,
    onDropAccepted: (af: File[]) => handleAccepted(af),
    onDropRejected: (rf: FileRejection[]) => handleRejected(rf),
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <Button
        type="button"
        onClick={open}
        variant="outline"
        leftIcon={<BiCloudUpload size={16} color={COLORS.dark} />}
        sx={{ color: COLORS.dark, borderColor: COLORS.dark }}
      >
        {label}
      </Button>
    </div>
  );
};