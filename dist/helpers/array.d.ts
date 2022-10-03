export declare const isArray: <Type>(arr: Type[]) => boolean;
export declare const isEmptyArray: <Type>(arr: Type[]) => boolean;
export declare const isNotEmptyArray: <Type>(arr: Type[]) => boolean;
export declare const isArrayLength: <Type>(arr: Type[], length: number) => boolean;
export declare const splitArray: <Type>(arr: Type[], index: number) => Type[][];
export declare function definedFilter<T>(array?: (T | undefined)[]): T[];
