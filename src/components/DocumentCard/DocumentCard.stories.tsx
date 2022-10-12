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
    '...nödvändig anläggningsinformation val mellan generisk vy eller favoritvy för betjäning och övervakning av om varans kemiska sammansättning är annan efter inbyggnad än vid leverans, anges innehållet i den färdiga inbyggdavaran här. Om innehållet är oförändrat lämnas inga uppgifter i nedanstående tabell.',
  previewUrl: 'https://picsum.photos/190/130',
  buildingCategory: '119 · Declaration of conformity electrical',
  buildingOwner: 'Mikkels Malerservice A/S',
};
