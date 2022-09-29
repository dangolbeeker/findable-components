import React from "react";
import type { ButtonProps } from "./Button.types";

const Button = (props: ButtonProps) => {
  return <button {...props}>{props.children}</button>;
};

export default Button;
