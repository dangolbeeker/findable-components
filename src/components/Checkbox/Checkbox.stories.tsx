import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Checkbox, CheckboxComponentProps } from './Checkbox';

export default {
  title: 'Checkbox',
} as Meta;

const CheckboxTemplate = (props: CheckboxComponentProps) => {
  return <Checkbox {...props} checked={props.checked} />;
};

export const CheckboxComponent: Story<CheckboxComponentProps> = CheckboxTemplate.bind(
  {}
);

CheckboxComponent.args = {
  checked: false,
  label: 'Checkbox',
};
