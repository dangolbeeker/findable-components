import React from 'react';
import {
  MultiSelect as MultiSelectComponent,
  MultiSelectProps,
} from '@mantine/core';

export interface MultiSelectComponentProps extends MultiSelectProps {
  onChange: any;
}
export const MultiSelect = ({ ...props }: MultiSelectComponentProps) => {
  return <MultiSelectComponent {...props} searchable clearable />;
};
