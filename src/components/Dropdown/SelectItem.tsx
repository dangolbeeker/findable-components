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
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <Text sx={{ paddingRight: 4, minWidth: 30 }}>
            {title ? value : label}
          </Text>
          {title && <Text sx={{ paddingRight: 4 }}>-</Text>}
          <Box>
            {title && <Text>{title}</Text>}
            {description && title && (
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
