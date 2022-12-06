import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Dropzone, DropzoneProps, FileRejection } from './Dropzone';
import { UploadButton } from './UploadButton';

export default {
  title: 'Dropzone',
} as Meta;

const DropzoneTemplate = (props: DropzoneProps) => (
  <Dropzone
    label={props.label}
    buttonLabel={props.buttonLabel}
    handleAccepted={function(acceptedFiles: File[]): void {
      console.log({ acceptedFiles });
    }}
    handleRejected={function(rejectedFiles: FileRejection[]): void {
      console.log({ rejectedFiles });
    }}
  />
);

export const DropzoneComponent: Story<DropzoneProps> = DropzoneTemplate.bind(
  {}
);

DropzoneComponent.args = {
  label: 'Drag images here or click to select files',
  buttonLabel: 'Select files',
};

export const UploadButtonComponent = () => (
  <UploadButton
    label="Select files"
    handleAccepted={function(acceptedFiles: File[]): void {
      console.log({ acceptedFiles });
    }}
    handleRejected={function(rejectedFiles: FileRejection[]): void {
      console.log({ rejectedFiles });
    }}
  />
);
