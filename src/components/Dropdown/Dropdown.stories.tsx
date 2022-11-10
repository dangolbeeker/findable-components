import React, { useState } from 'react';
import { Box, Text } from '@mantine/core';
import { Meta, Story } from '@storybook/react';

import { Dropdown, DropdownComponentProps, Item, ItemProps } from './Dropdown';
import { SelectItem } from './SelectItem';

export default {
  title: 'Dropdown',
} as Meta;

const DropdownTemplate = (props: DropdownComponentProps) => {
  const [value, setValue] = useState<string | null>(null);

  return (
    <Dropdown
      {...props}
      value={value}
      setValue={setValue}
      label={props.label}
    />
  );
};

export const DropdownComponent: Story<DropdownComponentProps> = DropdownTemplate.bind(
  {}
);

DropdownComponent.args = {
  data: [
    {
      value: '200',
      title: 'Bygning, generelt',
      label: '200 - Bygning, generelt',
      group: 'Automatisk forslag til sortering',
      suggestionTxt: 'forslag',
      description: 'Omfatter bygningsmessige deler.',
    },
    {
      value: '117',
      title: 'Adresselister (leverandører)',
      label: '117 - Adresselister (leverandører)',
      group: 'Automatisk forslag til sortering',
      suggestionTxt: 'forslag',
      description: '',
    },
    {
      value: '400',
      title: 'Elkraft, generelt',
      label: '400 - Elkraft, generelt',
      group: 'Automatisk forslag til sortering',
      suggestionTxt: 'forslag',
      description:
        'Omfatter elkrafttekniske installasjoner for drift av bygning og virksomhet i bygning.',
    },
    {
      value: '111',
      title: 'Kjøpskontrakter',
      label: '111 - Kjøpskontrakter',
      group: '',
      description: '',
    },
    {
      value: '112',
      title: 'Leiekontrakter',
      label: '112 - Leiekontrakter',
      group: '',
      description: '',
    },
    {
      value: '113',
      title: 'Drifts- og vedlikeholdsavtaler',
      label: '113 - Drifts- og vedlikeholdsavtaler',
      group: '',
      description: '',
    },
  ] as Item[],
  name: 'building-categories',
  label: 'Building Categories',
  required: true,
};

const SelectItemTemplate = (props: ItemProps) => {
  return (
    <Box sx={{ padding: 8, border: '1px solid lightblue', borderRadius: 4 }}>
      <SelectItem
        value={props.value}
        label={props.label}
        title={props.title}
        description={props.description}
        suggestionTxt={props.suggestionTxt}
      />
    </Box>
  );
};

export const SelectItemComponent: Story<ItemProps> = SelectItemTemplate.bind(
  {}
);

SelectItemComponent.args = {
  value: '200',
  title: 'Bygning, generelt',
  label: '200 - Bygning, generelt',
  suggestionTxt: 'forslag',
  description: 'Omfatter bygningsmessige deler.',
};
