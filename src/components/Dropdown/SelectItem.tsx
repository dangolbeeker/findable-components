import { Box, Group, Badge, Text } from '@mantine/core';
import React, { forwardRef } from 'react';
import { ItemProps } from './Dropdown';

export const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
  (
    { label, title, value, description, suggestionTxt, ...others }: ItemProps,
    ref
  ) => (
    <Box ref={ref} {...others}>
      <Group noWrap position="apart">
        <Box sx={{ display: 'flex' }}>
          <Text sx={{ paddingRight: 6, minWidth: 30 }}>{value}</Text>{' '}
          <Text sx={{ paddingRight: 6 }}>-</Text>
          <Box>
            <Text>{title}</Text>
            {description && (
              <Text size="xs" weight="light">
                {description}
              </Text>
            )}
          </Box>
        </Box>
        {suggestionTxt && <Badge radius="xs">{suggestionTxt}</Badge>}
      </Group>
    </Box>
  )
);
