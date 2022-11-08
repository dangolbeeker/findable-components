import React from 'react';
import { Checkbox as CheckboxComponent, CheckboxProps } from '@mantine/core';

export interface CheckboxComponentProps extends CheckboxProps {}
export const Checkbox = (props: CheckboxComponentProps) => {
  return <CheckboxComponent {...props} />;
};
