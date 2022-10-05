import { Category } from './types';

export const testfiles = [
  { code: '123', name: 'johnnytester', isFile: true, children: [] },
  { code: '345', name: 'johnnytest', isFile: true, children: [] },
  { code: '456', name: 'testjohnny', isFile: true, children: [] },
];
export const testdata: Category[] = [
  {
    code: '11',
    name: 'test',
    children: [
      {
        code: '111',
        name: 'Johnnytester',
        children: testfiles,
      },
    ],
  },
  {
    code: '12',
    name: 'test',
    children: [
      {
        code: '111',
        name: 'Johnnytester',
        children: [],
      },
    ],
  },
];
