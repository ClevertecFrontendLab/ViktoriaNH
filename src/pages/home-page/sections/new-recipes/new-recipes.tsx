import { Box, Text } from '@chakra-ui/react';

import { NewRecipeSmallList } from './new-recipes-list/new-recipe-small-list';
import { RecipeList } from './new-recipes-list/new-recipes-list';

export const NewRecipes = () => (
    <Box as='section' h='auto'>
        <Text
            as='h2'
            mb={{ base: 3, lg: 6 }}
            fontSize={{
                base: '24px',
                lg: '36px',
                xl: '48px',
            }}
            fontWeight={{ base: '500', lg: '500' }}
            fontFamily='Inter, sans-serif'
            lineHeight={{
                base: '133%',
                lg: '111%',
                xl: '100%',
            }}
            textStyle={{
                base: 'body',
                xl: 'h2',
            }}
        >
            Новые рецепты
        </Text>

        <Box
            sx={{
                display: { base: 'none', lg: 'flex' },
            }}
        >
            <RecipeList />
        </Box>

        <Box
            sx={{
                display: { base: 'flex', lg: 'none' },
            }}
        >
            <NewRecipeSmallList />
        </Box>
    </Box>
);
