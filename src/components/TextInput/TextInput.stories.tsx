import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';

import { TextInput, TextInputComponentProps } from './TextInput';

export default {
  title: 'TextInput',
} as Meta;

const TextInputTemplate = (props: TextInputComponentProps) => {
  const [value, setValue] = useState(props.value);

  return (
    <TextInput
      {...props}
      value={value}
      onChange={event => setValue(event.currentTarget.value)}
    />
  );
};

export const TextInputComponent: Story<TextInputComponentProps> = TextInputTemplate.bind(
  {}
);

TextInputComponent.args = {
  value: '',
  label: 'Text Input',
  required: true,
};
