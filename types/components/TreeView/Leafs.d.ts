/// <reference types="react" />
import type { Category } from "./types";
export declare const Leaf: ({ code, name, }: {
    code: Category["code"];
    name: Category["name"];
}) => JSX.Element;
export declare const Leafs: ({ leafs }: {
    leafs: Category[];
}) => JSX.Element;
