import React, { Dispatch, forwardRef, SetStateAction } from 'react';
import { Group, Text, Select, Box, SelectProps } from '@mantine/core';

interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
  label: string;
  description?: string;
  score?: number;
}

export interface Item
  extends Pick<ItemProps, 'label' | 'description' | 'score'> {
  value: string;
  group?: string;
}

export interface DropdownComponentProps extends SelectProps {
  data: Item[];
  value: string | null;
  setValue: Dispatch<SetStateAction<string | null>>;
  name?: string;
  label?: string;
  required?: boolean;
}

export const Dropdown = ({
  data = [],
  value,
  setValue,
  name,
  label,
  required,
  ...props
}: DropdownComponentProps) => {
  const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
    ({ label, description, score, ...others }: ItemProps, ref) => (
      <Box ref={ref} {...others}>
        <Group noWrap position="apart">
          <Box>
            <Text size="sm">{label}</Text>
            {description && <Text size="xs">{description}</Text>}
          </Box>
          {score && <Text size="xs">{score}%</Text>}
        </Group>
      </Box>
    )
  );

  return (
    <Select
      itemComponent={SelectItem}
      clearable
      label={label}
      name={name}
      searchable
      allowDeselect={false}
      transition="pop-top-left"
      transitionDuration={80}
      transitionTimingFunction="ease"
      withAsterisk={required}
      value={value}
      onChange={setValue}
      data={data ?? []}
      filter={(v, item: Item) =>
        item.label.toLowerCase().includes(v.toLowerCase().trim()) ||
        !!item?.description?.toLowerCase().includes(v.toLowerCase().trim())
      }
      {...props}
    />
  );
};
