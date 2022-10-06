import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';

import { Box } from '@mantine/core';

import { ListView } from './ListView';
import documents from '../../data/dummyDocData.json';

export default {
  title: 'List view',
} as Meta;

const ListViewTemplate = (args: { searchFilterValue?: string }) => {
  const [selections, setSelections] = useState<string[]>([]);

  console.log({ selections });

  return (
    <Box sx={{ height: '85vh' }}>
      <ListView
        documents={documents as any}
        handleSelection={(selection: React.SetStateAction<string[]>) =>
          setSelections(selection)
        }
        handleSelectDocument={(document: any) => console.log(document)}
        onDeleteDocument={(document: any) => console.log(document)}
        searchFilterValue={args.searchFilterValue}
      />
    </Box>
  );
};

export const ListViewComponent: Story<{
  searchFilterValue: string;
}> = ListViewTemplate.bind({});

ListViewComponent.args = {
  searchFilterValue: '',
};
