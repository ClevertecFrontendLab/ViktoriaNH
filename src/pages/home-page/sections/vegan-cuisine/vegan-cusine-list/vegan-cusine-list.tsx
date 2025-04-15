import { Box } from '@chakra-ui/react';

import { recipeItems } from '../../../../../data/vegan-items';
import { veganCuisineRecipes } from '../../../../../data/vegan-recipes';
import { VeganCuisineBlock } from './vegan-cuisine-block';
import { VeganCuisineCard } from './vegan-cuisine-card';

export const VeganCuisineList = () => (
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
            {veganCuisineRecipes.map((recipe) => (
                <VeganCuisineCard key={recipe.id} data={recipe} />
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
            {recipeItems.map((item) => (
                <VeganCuisineBlock key={item.id} data={item} />
            ))}
        </Box>
    </Box>
);
