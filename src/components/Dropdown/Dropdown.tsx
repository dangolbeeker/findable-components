import React, { Dispatch, SetStateAction } from 'react';
import { Select, Box, SelectProps } from '@mantine/core';
import { SelectItem } from './SelectItem';

export interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
  value: string;
  label: string;
  title: string;
  description?: string;
  suggestionTxt?: string;
}

export interface Item
  extends Pick<
    ItemProps,
    'value' | 'label' | 'title' | 'description' | 'suggestionTxt'
  > {
  group?: string;
}

export interface DropdownComponentProps extends SelectProps {
  data: Item[];
  value: string | null;
  setValue: Dispatch<SetStateAction<string | null>>;
  name?: string;
  label?: string | React.ReactNode;
  description?: string | React.ReactNode;
}

export const Dropdown = ({
  data = [],
  value,
  setValue,
  name,
  label,
  description,
  ...props
}: DropdownComponentProps) => {
  return (
    <Box>
      {label}
      <Select
        itemComponent={SelectItem}
        clearable
        aria-label={typeof label === 'string' ? label : ''}
        name={name}
        searchable
        allowDeselect={false}
        transition="pop-top-left"
        transitionDuration={80}
        transitionTimingFunction="ease"
        value={value}
        onChange={setValue}
        data={data ?? []}
        filter={(v, item: Item) =>
          item.label.toLowerCase().includes(v.toLowerCase().trim()) ||
          !!item?.description?.toLowerCase().includes(v.toLowerCase().trim())
        }
        {...props}
      />
      {description}
    </Box>
  );
};
