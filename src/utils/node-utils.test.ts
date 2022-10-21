import { testdata } from '../data';
import { countFiles, checkIfFolders, getFiles } from './index';

test('Can count files', () => {
  const count = countFiles(testdata);
  expect(count).toBe(18);

  const nullCount = countFiles(null as any);
  expect(nullCount).toBe(0);

  const undefinedCount = countFiles(undefined as any);
  expect(undefinedCount).toBe(0);

  const noFilesCount = countFiles([{ children: [] } as any]);
  expect(noFilesCount).toBe(0);

  const emptyObjectCount = countFiles({} as any);
  expect(emptyObjectCount).toBe(0);

  const emptyArrayCount = countFiles([]);
  expect(emptyArrayCount).toBe(0);
});

test('Can check if children are folders', () => {
  const childrenHasFolders = checkIfFolders(testdata);
  expect(childrenHasFolders).toBeTruthy();

  const childrenHasNoFolders = checkIfFolders([
    { code: '123', name: 'test', isFile: true, children: [] },
  ]);
  expect(childrenHasNoFolders).toBeFalsy();

  const nullCheck = checkIfFolders(null as any);
  expect(nullCheck).toBeFalsy();

  const undefinedCheck = checkIfFolders(undefined as any);
  expect(undefinedCheck).toBeFalsy();

  const emptyObjectCheck = checkIfFolders({} as any);
  expect(emptyObjectCheck).toBeFalsy();

  const emptyArrayCheck = checkIfFolders([]);
  expect(emptyArrayCheck).toBeFalsy();
});

test('Can get files', () => {
  const files = getFiles(testdata);

  expect(files).toEqual([
    '123',
    '345',
    '678',
    '911',
    '912',
    '913',
    '123',
    '345',
    '678',
    '911',
    '912',
    '913',
    '123',
    '345',
    '678',
    '911',
    '912',
    '913',
  ]);

  const nullGet = getFiles(null as any);
  expect(nullGet).toEqual([]);

  const undefinedGet = getFiles(undefined as any);
  expect(undefinedGet).toEqual([]);

  const noFilesGet = getFiles([{ children: [] } as any]);
  expect(noFilesGet).toEqual([]);

  const emptyObjectGet = getFiles({} as any);
  expect(emptyObjectGet).toEqual([]);

  const emptyArrayGet = getFiles([]);
  expect(emptyArrayGet).toEqual([]);
});
