import React from 'react';
import { ButtonProps } from './Button.types';

export const Button = (props: ButtonProps) => {
  return <button {...props}> {props.children}</button>;
};
