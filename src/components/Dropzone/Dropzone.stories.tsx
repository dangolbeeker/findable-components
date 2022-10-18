import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Dropzone } from './Dropzone';
import { FileRejection } from 'react-dropzone';

export default {
  title: 'Dropzone',
} as Meta;

const DropzoneTemplate = () => (
  <Dropzone
    heading="johnnytesthohaho"
    description="Johnnytester"
    handleAccepted={function(acceptedFiles: File[]): void {
      console.log({ acceptedFiles });
    }}
    handleRejected={function(rejectedFiles: FileRejection[]): void {
      console.log({ rejectedFiles });
    }}
  />
);

export const DropzoneComponent: Story<{}> = DropzoneTemplate.bind({});

DropzoneComponent.args = {};
