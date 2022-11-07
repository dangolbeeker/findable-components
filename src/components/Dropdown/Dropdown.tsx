import React, { Dispatch, forwardRef, SetStateAction } from 'react';
import { Group, Text, Select, Box } from '@mantine/core';

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

export interface DropdownProps {
  data: Item[];
  value: string | null;
  setValue: Dispatch<SetStateAction<string | null>>;
}

export const Dropdown = ({ data = [], value, setValue }: DropdownProps) => {
  return (
    <Select
      itemComponent={SelectItem}
      value={value}
      onChange={setValue}
      data={data ?? []}
      searchable
      clearable
      filter={(v, item: Item) =>
        item.label.toLowerCase().includes(v.toLowerCase().trim())
      }
      styles={() => ({
        item: {
          // applies styles to selected item
          '&[data-selected]': {
            '&, &:hover': {
              backgroundColor: '#C0E3F9',
              color: '#2952CC',
            },
          },

          // applies styles to hovered item (with mouse or keyboard)
          '&[data-hovered]': {
            backgroundColor: '#C0E3F9',
          },
        },
        input: {
          ':focus': {
            borderColor: '#C0E3F9',
          },
        },
      })}
      transition="pop-top-left"
      transitionDuration={80}
      transitionTimingFunction="ease"
    />
  );
};

const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ label, description, score, ...others }: ItemProps, ref) => (
    <Box
      ref={ref}
      {...others}
      sx={{
        marginBottom: 8,
      }}
    >
      <Group noWrap position="apart">
        <Box>
          <Text
            size="sm"
            weight={score ? 'bold' : ''}
            color={score ? '#2952CC' : ''}
          >
            {label}
          </Text>
          {description && (
            <Text size="xs" color="dimmed">
              {description}
            </Text>
          )}
        </Box>
        {score && (
          <Text size="xs" color="dimmed">
            {score}%
          </Text>
        )}
      </Group>
    </Box>
  )
);
