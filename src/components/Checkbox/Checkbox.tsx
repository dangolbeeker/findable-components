import React, { Dispatch, SetStateAction } from 'react';
import { Checkbox as CheckboxComponent, CheckboxProps } from '@mantine/core';

export interface CheckboxComponentProps extends CheckboxProps {
  checked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
}
export const Checkbox = ({ checked, setChecked }: CheckboxComponentProps) => {
  return (
    <CheckboxComponent
      checked={checked}
      onChange={event => setChecked(event.currentTarget.checked)}
    />
  );
};
