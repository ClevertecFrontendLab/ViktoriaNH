import { Box, useBreakpointValue } from '@chakra-ui/react';

import { Recipe } from '~/types/recipe-types';

import { BestCard } from './sections/best-recipes/best-recipes-list/components/best-card';
import { BestCardSmall } from './sections/best-recipes/best-recipes-list/components/best-small-card';

interface FoundRecipesListProps {
    recipes: Recipe[];
    searchText: string;
}

export const FoundRecipesList: React.FC<FoundRecipesListProps> = ({ recipes, searchText }) => {
    const isLargeScreen = useBreakpointValue({ base: false, lg: true });

    if (recipes.length === 0) {
        return (
            <Box textAlign='center' mt='40px'>
                Ничего не найдено
            </Box>
        );
    }

    return (
        <Box
            display='grid'
            gridTemplateColumns={{
                base: '1fr',
                md: 'repeat(2, 1fr)',
                lg: '1fr',
                xl: 'repeat(2, 1fr)',
            }}
            gap={{
                base: '12px',
                md: '16px',
                lg: '16px',
                xl: '24px',
            }}
            width='100%'
            mt='24px'
        >
            {recipes.map((recipe, index) => (
                <Box key={recipe.id} data-test-id={`food-card-${index}`}>
                    {isLargeScreen ? (
                        <BestCard data={recipe} searchText={searchText} />
                    ) : (
                        <BestCardSmall data={recipe} searchText={searchText} />
                    )}
                </Box>
            ))}
        </Box>
    );
};
