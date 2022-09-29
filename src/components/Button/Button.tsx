import type { ButtonProps } from "./Button.types";

export const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
      style={{
        ...props.style,
        background: "white",
        border: "none",
        padding: 8,
      }}
    >
      {props.children}
    </button>
  );
};
