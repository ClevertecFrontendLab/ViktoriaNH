import { Box } from '@chakra-ui/react';

import { recipes } from '../../../../../data/new-recipes';
import { Recipe } from '../../../../../data/new-recipes';
import { NewRecipeCardSmall } from './components/new-recipe-small-card';

export const NewRecipeSmallList: React.FC = () => (
    <Box
        minW='158px'
        maxW='1439px'
        display='flex'
        flexWrap='nowrap'
        justifyContent='start'
        gap={3}
        position='relative'
        overflow='hidden'
    >
        {recipes.map((recipe: Recipe) => (
            <NewRecipeCardSmall key={recipe.id} data={recipe} />
        ))}
    </Box>
);
