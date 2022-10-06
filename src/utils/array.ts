export const isArray = <Type>(arr: Array<Type>): boolean => Array.isArray(arr);

export const isEmptyArray = <Type>(arr: Array<Type>): boolean => {
  return isArray(arr) && arr.length === 0;
};

export const isNotEmptyArray = <Type>(arr: Array<Type>): boolean => {
  return isArray(arr) && !isEmptyArray(arr);
};

export const isArrayLength = <Type>(
  arr: Array<Type>,
  length: number
): boolean => {
  return isArray(arr) && arr.length === length;
};

export const splitArray = <Type>(
  arr: Array<Type>,
  index: number
): Array<Type>[] => {
  return [arr.slice(0, index), arr.slice(index)];
};

export function definedFilter<T>(array?: (T | undefined)[]): T[] {
  function isDefined(e: T | undefined): e is T {
    return !!e;
  }
  return array?.filter(isDefined) ?? [];
}
