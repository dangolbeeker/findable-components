import React from 'react';
import { MantineProvider, MantineProviderProps } from '@mantine/core';

export const ThemeProvider = ({ children, theme }: MantineProviderProps) => (
  <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
    {children}
  </MantineProvider>
);
