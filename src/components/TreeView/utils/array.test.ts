import {
  isArray,
  isArrayLength,
  isEmptyArray,
  isNotEmptyArray,
  splitArray,
} from './array';

test('isArray', () => {
  expect(isArray([])).toBeTruthy();
  expect(isArray({} as [])).toBeFalsy();
});

test('isEmptyArray', () => {
  expect(isEmptyArray([])).toBeTruthy();
  expect(isEmptyArray(['hello', { foo: 'bar' }])).toBeFalsy();
});

test('isNotEmptyArray', () => {
  expect(isNotEmptyArray(['hello', { foo: 'bar' }])).toBeTruthy();
  expect(isNotEmptyArray([])).toBeFalsy();
});

test('isArrayLength', () => {
  expect(isArrayLength(['hello', { foo: 'bar' }], 2)).toBeTruthy();
  expect(isArrayLength(['hello'], 2)).toBeFalsy();
  expect(isArrayLength([], 2)).toBeFalsy();
});

test('splitArray', () => {
  expect(splitArray(['foo', 'bar', 'foobar'], 2)).toStrictEqual([
    ['foo', 'bar'],
    ['foobar'],
  ]);
  expect(splitArray([], 4)).toStrictEqual([[], []]);
});
