import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';

import { Dropdown, DropdownProps, Item } from './Dropdown';

export default {
  title: 'Dropdown',
} as Meta;

const DropdownTemplate = (props: DropdownProps) => {
  const [value, setValue] = useState<string | null>(null);

  return <Dropdown {...props} value={value} setValue={setValue} />;
};

export const DropdownComponent: Story<DropdownProps> = DropdownTemplate.bind(
  {}
);

DropdownComponent.args = {
  data: [
    {
      label: 'Carol Miller',
      value: 'Carol Miller',
      description: 'johnnytester hahaha',
      score: 23,
      group: 'Findable automatic sort',
    },
    {
      label: 'Homer Simpson',
      value: 'Homer Simpson',
      description: 'johnnytester  awef wf f awf awef ',
      score: 99,
      group: 'Findable automatic sort',
    },
    {
      label: 'Spongebob Squarepants',
      value: 'Spongebob Squarepants',
      score: 65,
      group: 'Findable automatic sort',
    },
    {
      label: 'Bender Bending Rodríguez',
      value: 'Bender Bending Rodríguez',
      description: 'joh. nytestf wf erfawefw ff awf awef wf f awf awef ',
      group: '210 - somethingsomething',
    },
    {
      label: 'Bender awef Rodríguez',
      value: 'Bender awefwef Rodríguez',
      group: '210 - somethingsomething',
    },
  ] as Item[],
};
