import React from 'react';
import { Box, Card, HoverCard, Image, Text, Title } from '@mantine/core';
import { AiFillFolder } from 'react-icons/ai';
import { BsPeopleFill } from 'react-icons/bs';

import { COLORS } from '../../styles/colors';

export interface DocumentCardPops {
  filename: string;
  documentId: string;
  previewUrl: string;
  handleCardAction: (docId: string) => void;
  highlight?: string | null;
  buildingCategory?: string;
  buildingOwner?: string;
}

export const DocumentCard = ({
  filename,
  highlight,
  documentId,
  previewUrl,
  handleCardAction,
  buildingCategory,
  buildingOwner,
}: DocumentCardPops) => {
  return (
    <Card
      withBorder
      tabIndex={1}
      sx={{ display: 'flex', overflow: 'unset', cursor: 'pointer' }}
      onClick={() => handleCardAction(documentId)}
    >
      <HoverCard position="right-start">
        <HoverCard.Target>
          <Image
            radius="xs"
            width={130}
            height={180}
            src={previewUrl}
            withPlaceholder
            sx={{ overflow: 'hidden' }}
            alt={filename}
          />
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Image
            radius="sm"
            width={360}
            height={360}
            fit="cover"
            src={previewUrl}
            withPlaceholder
            sx={{ overflow: 'hidden' }}
            alt={filename}
          />
        </HoverCard.Dropdown>
      </HoverCard>

      <Box sx={{ padding: 12 }}>
        <Title order={1} size="h4" sx={{ marginBottom: 8 }}>
          {filename}
        </Title>
        {(buildingOwner || buildingCategory) && (
          <Box sx={{ marginBottom: 12, display: 'flex', alignItems: 'center' }}>
            {buildingCategory && (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  marginRight: 12,
                }}
              >
                <Box sx={{ marginRight: 4 }}>
                  <AiFillFolder
                    style={{ display: 'flex' }}
                    color={COLORS.dark}
                  />
                </Box>
                <Text size="xs" color={COLORS.dark}>
                  {buildingCategory}
                </Text>
              </Box>
            )}
            {buildingOwner && (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ marginRight: 4 }}>
                  <BsPeopleFill
                    style={{ display: 'flex' }}
                    color={COLORS.dark}
                  />
                </Box>
                <Text size="xs" color={COLORS.dark}>
                  {buildingOwner}
                </Text>
              </Box>
            )}
          </Box>
        )}
        <Text
          size="xs"
          sx={{
            maxWidth: '100%',
            '@media (min-width: 755px)': {
              maxWidth: '80%',
            },
          }}
          dangerouslySetInnerHTML={{
            __html: highlight ?? '',
          }}
        />
      </Box>
    </Card>
  );
};
