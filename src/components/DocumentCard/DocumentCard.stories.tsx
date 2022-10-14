import React from 'react';
import { Meta, Story } from '@storybook/react';

import { DocumentCard, DocumentCardPops } from './DocumentCard';

export default {
  title: 'Document Card',
} as Meta;

const DocumentCardTemplate = (args: DocumentCardPops) => (
  <DocumentCard {...args} />
);

export const DocumentCardComponent: Story<DocumentCardPops> = DocumentCardTemplate.bind(
  {}
);

DocumentCardComponent.args = {
  filename: 'betjeningsenhet type pxm10-1.pdf',
  documentId: 'https://picsum.photos/200/300',
  highlight:
    'bygget ramme furu <em>døren</em> isolert polystyren aluminiumsplate fuktsperre innside ytterside hdf-plate begge',
  previewUrl: 'https://picsum.photos/190/130',
  buildingCategory: '119 · Declaration of conformity electrical',
  buildingOwner: 'Mikkels Malerservice A/S',
};
