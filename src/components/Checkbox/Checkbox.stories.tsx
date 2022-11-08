import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';

import { Checkbox, CheckboxComponentProps } from './Checkbox';

export default {
  title: 'Checkbox',
} as Meta;

const CheckboxTemplate = (props: CheckboxComponentProps) => {
  const [checked, setChecked] = useState(props.checked);
  return <Checkbox {...props} checked={checked} setChecked={setChecked} />;
};

export const CheckboxComponent: Story<CheckboxComponentProps> = CheckboxTemplate.bind(
  {}
);

CheckboxComponent.args = {
  checked: false,
  label: 'Checkbox',
};
