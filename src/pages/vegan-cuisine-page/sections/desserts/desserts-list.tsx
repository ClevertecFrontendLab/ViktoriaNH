import { Box } from '@chakra-ui/react';

import { dessertRecipes } from '../../../../data/dessert-recipes';
import { dessertItems } from '../../../../data/desserts-items';
import { DessertsBlock } from './desserts-block';
import { DessertsCard } from './desserts-card';

export const DessertsList = () => (
    <Box
        display='flex'
        flexDirection={{ base: 'column', md: 'row' }}
        gap={{ base: '12px', lg: '16px', xl: '24px' }}
        w='100%'
        minW={0}
    >
        <Box
            display='flex'
            flexWrap='wrap'
            gap={{ base: '12px', lg: '16px', xl: '24px' }}
            flexShrink={0}
            minW={0}
        >
            {dessertRecipes.map((dessertRecipes) => (
                <DessertsCard key={dessertRecipes.id} data={dessertRecipes} />
            ))}
        </Box>

        <Box
            display='flex'
            flexDirection='column'
            gap='12px'
            flexShrink={0}
            flex={1}
            w={{ base: '100%', md: '208px' }}
        >
            {dessertItems.map((item) => (
                <DessertsBlock key={item.id} data={item} />
            ))}
        </Box>
    </Box>
);
