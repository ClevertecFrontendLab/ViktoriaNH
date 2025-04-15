import { Box } from '@chakra-ui/react';

import { bestRecipes } from '../../../../../data/best-recipes';
import { BestCard } from '../../../../home-page/sections/best-recipes/best-recipes-list/components/best-card';
import { BestCardSmall } from '../../../../home-page/sections/best-recipes/best-recipes-list/components/best-small-card';

const doubledRecipes = [...bestRecipes, ...bestRecipes];

export const VeganRecipesList: React.FC = () => (
    <Box
        display='grid'
        gridTemplateColumns={{
            base: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(1, 1fr)',
            xl: 'repeat(2, 1fr)',
        }}
        gridTemplateRows='auto'
        gap={{
            base: '8px',
            md: '12px',
            lg: '16px',
            xl: '16px',
        }}
        width='100%'
        maxW='100%'
        overflowX='hidden'
    >
        {doubledRecipes.map((recipe) => (
            <Box
                key={`small-${recipe.id}-${Math.random()}`}
                display={{
                    base: 'block',
                    md: 'block',
                    lg: 'none',
                }}
                maxW='100%'
                minW='0'
            >
                <BestCardSmall data={recipe} />
            </Box>
        ))}

        {doubledRecipes.map((recipe) => (
            <Box
                key={`big-${recipe.id}-${Math.random()}`}
                display={{
                    base: 'none',
                    md: 'none',
                    lg: 'block',
                }}
                maxW='100%'
                minW='0'
            >
                <BestCard data={recipe} />
            </Box>
        ))}
    </Box>
);
