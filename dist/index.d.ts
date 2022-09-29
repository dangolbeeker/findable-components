/// <reference types="react" />
interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
}

declare const Button: (props: ButtonProps) => JSX.Element;

export { Button };
