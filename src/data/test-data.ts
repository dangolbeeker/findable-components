export const testfiles = [
  { code: '123', name: 'file1', isFile: true, children: [] },
  { code: '345', name: 'file2', isFile: true, children: [] },
  { code: '678', name: 'file3', isFile: true, children: [] },
  { code: '911', name: 'file4', isFile: true, children: [] },
  { code: '912', name: 'file5', isFile: true, children: [] },
  { code: '913', name: 'file6', isFile: true, children: [] },
];
export const testdata = [
  {
    code: '1',
    name: 'category',
    children: [
      {
        code: '11',
        name: 'subcategory',
        children: [
          {
            code: '111',
            name: 'sub sub category',
            children: testfiles,
          },
        ],
      },
    ],
  },
  {
    code: '2',
    name: 'category',
    children: [
      {
        code: '21',
        name: 'subcategory',
        children: [
          {
            code: '210',
            name: 'sub sub category',
            children: [],
          },
        ],
      },
    ],
  },
  {
    code: '3',
    name: 'category',
    children: [
      {
        code: '32',
        name: 'subcategory',
        children: [
          {
            code: '330',
            name: 'sub sub category',
            children: testfiles,
          },
        ],
      },
      {
        code: '33',
        name: 'subcategory',
        children: [
          {
            code: '304',
            name: 'sub sub category',
            children: testfiles,
          },
        ],
      },
    ],
  },
];
