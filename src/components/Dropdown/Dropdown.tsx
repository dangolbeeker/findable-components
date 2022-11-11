import React, { Dispatch, forwardRef, SetStateAction } from 'react';
import { Select, Box, SelectProps, Group, Text, Badge } from '@mantine/core';

export interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
  value: string;
  label: string;
  title?: string;
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
  const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
    (
      { label, title, value, description, suggestionTxt, ...others }: ItemProps,
      ref
    ) => {
      const hasTitle =
        (typeof title === 'string' && title.length > 0) ||
        typeof title !== undefined;
      return (
        <Box ref={ref} {...others}>
          <Group noWrap position="apart">
            <Box
              sx={{
                display: 'flex',
              }}
            >
              <Text sx={{ paddingRight: 4, minWidth: 30 }}>
                {hasTitle ? value : label}
              </Text>
              {hasTitle && <Text sx={{ paddingRight: 4 }}>-</Text>}
              <Box>
                {hasTitle && <Text>{title}</Text>}
                {description && hasTitle && (
                  <Text size="xs" weight="light">
                    {description}
                  </Text>
                )}
              </Box>
            </Box>
            {suggestionTxt && (
              <Badge radius="xs" sx={{ flexShrink: 0 }}>
                {suggestionTxt}
              </Badge>
            )}
          </Group>
        </Box>
      );
    }
  );

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
