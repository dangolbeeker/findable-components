/// <reference types="react" />
interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    label: string;
}

declare const Button: (props: ButtonProps) => JSX.Element;

export { Button };
