import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from '@mantine/core';
import { BiCloudUpload } from 'react-icons/bi';

import { MIN_FILE_SIZE, MAX_FILE_SIZE } from './config';
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
  const { getRootProps, getInputProps, open } = useDropzone({
    noClick: true,
    noKeyboard: true,
    minSize: MIN_FILE_SIZE,
    maxSize: MAX_FILE_SIZE,
    onDropAccepted: (af: File[]) => handleAccepted(af),
    onDropRejected: (rf: FileRejection[]) => handleRejected(rf),
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <DropzoneButton label={label} type="button" onClick={open}>
        {label}
      </DropzoneButton>
    </div>
  );
};
