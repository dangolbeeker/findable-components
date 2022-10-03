import React from 'react';
import { ThemeProvider } from '../src/ThemeProvider';
import { theme } from '../src/theme';
// Create a wrapper component that will contain all your providers.
// Usually you should render all providers in this component:

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
};

// MantineProvider, NotificationsProvider, ModalsProvider, SpotlightProvider, etc.
function ThemeWrapper(props: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

// enhance your stories with decorator that uses ThemeWrapper
export const decorators = [
  (renderStory: Function) => <ThemeWrapper>{renderStory()}</ThemeWrapper>,
];
