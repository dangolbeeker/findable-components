import React, { Dispatch, SetStateAction } from 'react';
import { TextInput as TextInputComponent, TextInputProps } from '@mantine/core';

export interface TextInputComponentProps extends TextInputProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  required?: boolean;
}
export const TextInput = ({
  value,
  setValue,
  required,
  ...props
}: TextInputComponentProps) => {
  return (
    <TextInputComponent
      value={value}
      withAsterisk={required}
      onChange={event => setValue(event.currentTarget.value)}
      {...props}
    />
  );
};
