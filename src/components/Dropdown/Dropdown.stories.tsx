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
      value: '200',
      label: '200 - Bygning, generelt',
      group: '⭐️ Findable forslag',
      score: 99.89,
      description: 'Omfatter bygningsmessige deler.',
    },
    {
      value: '117',
      label: '117 - Adresselister (leverandører)',
      group: '⭐️ Findable forslag',
      score: 0.01,
      description: '',
    },
    {
      value: '400',
      label: '400 - Elkraft, generelt',
      group: '⭐️ Findable forslag',
      score: 0.01,
      description:
        'Omfatter elkrafttekniske installasjoner for drift av bygning og virksomhet i bygning.',
    },
    {
      value: '111',
      label: '111 - Kjøpskontrakter',
      group: '',
      score: null,
      description: '',
    },
    {
      value: '112',
      label: '112 - Leiekontrakter',
      group: '',
      score: null,
      description: '',
    },
    {
      value: '113',
      label: '113 - Drifts- og vedlikeholdsavtaler',
      group: '',
      score: null,
      description: '',
    },
  ] as Item[],
  name: 'building-categories',
  label: 'Building Categories',
  required: true,
};
