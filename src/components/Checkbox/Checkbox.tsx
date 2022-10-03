import React from 'react';
import { CheckboxProps } from './Checkbox.types';

export const Checkbox = (props: CheckboxProps) => (
  <div>
    <input type="checkbox" {...props} />
    <label>label</label>
  </div>
);
