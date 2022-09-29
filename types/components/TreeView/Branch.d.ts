/// <reference types="react" />
import type { Category } from "./types";
export declare const Branch: ({ count, name, code, overCheck, allFiles, children, }: {
    count: number;
    name: Category["name"];
    code: Category["code"];
    overCheck?: boolean | undefined;
    allFiles: Category["code"][];
    children: import("react").FC<{
        overCheck: boolean;
    }>;
}) => JSX.Element;
