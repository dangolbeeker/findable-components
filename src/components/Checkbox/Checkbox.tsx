import { CheckboxProps } from "./Checkbox.types";

export const Checkbox = (props: CheckboxProps) => (
  <input type="checkbox" {...props} style={{ ...props.style }} />
);
