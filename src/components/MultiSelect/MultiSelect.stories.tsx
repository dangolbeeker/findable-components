import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';

import { MultiSelect, MultiSelectComponentProps } from './MultiSelect';

export default {
  title: 'MultiSelect',
} as Meta;

const MultiSelectTemplate = (props: MultiSelectComponentProps) => {
  const [value, setValue] = useState([]);

  return <MultiSelect value={value} onChange={setValue} data={props.data} />;
};

export const MultiSelectComponent: Story<MultiSelectComponentProps> = MultiSelectTemplate.bind(
  {}
);

MultiSelectComponent.args = {
  data: [
    { value: 'React', label: 'React' },
    { value: 'Angular', label: 'Angular' },
    { value: 'Svelte', label: 'Svelte' },
    { value: 'Vue', label: 'Vue' },
  ],
};
