import React from 'react';
import { Button as ButtonComponent, ButtonProps } from '@mantine/core';

export const Button = (props: ButtonProps) => (
  <ButtonComponent {...props}>{props.children}</ButtonComponent>
);
