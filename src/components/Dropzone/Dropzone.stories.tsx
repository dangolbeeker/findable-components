import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Dropzone, DropzoneProps, FileRejection } from './Dropzone';

export default {
  title: 'Dropzone',
} as Meta;

const DropzoneTemplate = (props: DropzoneProps) => (
  <Dropzone
    heading={props.heading}
    description={props.description}
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
  heading: 'Drag images here or click to select files',
  description:
    'Attach as many files as you like, each file should not exceed 5mb',
};
