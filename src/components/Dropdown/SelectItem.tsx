import React, { forwardRef } from 'react';
import { Box, Group, Badge, Text } from '@mantine/core';
import { ItemProps } from './Dropdown';

export const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ label, description, suggestionTxt, ...others }: ItemProps, ref) => {
    return (
      <Box ref={ref} {...others}>
        <Group noWrap position="apart">
          <Box>
            <Text>{label}</Text>
            {description && (
              <Text size="xs" weight="light" sx={{ paddingLeft: 38 }}>
                {description}
              </Text>
            )}
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
